import React, { Component } from "react";
import Weather from "./weather";
import Ncard from "./ncard";
import key from './apikey';
import './App.css';
import { Button, Form, Row, Col, Spinner, Alert } from "react-bootstrap";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
      sqry: "",
      lat: "",
      lgi: "",
      usrlang: "",
      usrCont: "",
      naverr: true
    };
  }

  changeText = e => {
    this.setState({
      sqry: e.target.value
    });
  };

  getNews = e => {
    this.state.sqry === ""
      ? alert("Oops you missed something!")
      : e.preventDefault();
    this.setState({
      isLoaded: false
    });
    this.newsData();
  };

  newsData = () => {
    //fetches news based on user search query
    const token = "f1d7c94e298e120f58159223b3111be9"; //news api token
    let qry = this.state.sqry; //search query
    let la = this.state.usrlang; //user language
    fetch(`https://gnews.io/api/v2?q=${qry}&lang=${la}&token=${token}`)
      .then(response => {
        return response.json();
      })
      .then(news => {
        this.setState({
          isLoaded: true,
          data: news.articles
        });
      });

    console.log(this.state.data);
  };
  getLocation = () => {
    //fetch geolocation of user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.setState({
            naverr: false,
            lat: position.coords.latitude,
            lgi: position.coords.longitude
          });
        },
        error => {
          if (error.code == error.PERMISSION_DENIED) {
            this.setState({
              naverr: true
            });
          }
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser!");
    }
    let lan = navigator.language || navigator.userLanguage;
    let str = lan.split("-");
    this.setState({
      usrlang: str[0]
    }); //fetching browser language and setting it as user language
  };

  componentDidMount() {
    //on intial login it fetches Top news fromm gnews v3
    this.getLocation();
    //fetches news based on user search query
    const token = key.gnews; //news api token
    let la = this.state.usrlang; //user language
    fetch(`https://gnews.io/api/v3/top-news?&lang=${la}&token=${token}`)
      .then(response => {
        return response.json();
      })
      .then(news => {
        this.setState({
          isLoaded: true,
          data: news.articles
        });
        console.log("articles ", news.articles);
      });

	console.log(this.state.data);
	console.log('key',key)
  }

  render() {
    return (
      <Row className="justify-content-md-center">
        <Col md={12}>
          {this.state.naverr ? (
            <Alert variant="info">
              User Location is <strong>Disabled</strong> Weather info Not
              Available
            </Alert>
          ) : (
            <Weather latt={this.state.lat} long={this.state.lgi} />
          )}
        </Col>

        <Col md={12}>
          <div
            style={{
              alignContent: "center",
              backgroundColor: "#474747",
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 5
            }}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: 40,
                marginTop: 20,
                color: "#ffff",
                fontFamily: "Anton"
              }}>News Updates </h2>
            <Form onSubmit={this.getNews}>
              <input
                style={{ margin: 10 }}
                type="text"
                onChange={this.changeText}
              />
              <Button style={{ margin: 10 }} varient="primary" type="submit">
                search
              </Button>
            </Form>
          </div>

          <Row>
            {this.state.isLoaded ? (
              this.state.data.map((item, index) => {
                return (
                  <Col key={index} lg={6} md={6} xs={12}>
                    <Ncard
                      title={item.title}
                      dis={item.desc}
                      link={item.link || item.url}
                      img={item.image}
                    ></Ncard>
                  </Col>
                );
              })
            ) : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </Row>
        </Col>
      </Row>
    );
  }
}
