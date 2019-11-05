import React, { Component } from 'react';
import {Card,ListGroup,Spinner,Alert} from 'react-bootstrap';
import apikey from './apikey'
export default class Weather extends Component {
    constructor(){
        super();
        this.state={
            weather:[],
            main:[],
            wind:[],
            location:'india',
            sys:[],
            isLoaded:false
        }
    }
    weatherApi = () => {
        let lat=this.props.latt;
        let longi=this.props.long;
		const key =apikey.openweather;
		
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&APPID=${key}`)
		.then((response)=>{return response.json();})
        .then((locat)=>{console.log(locat);
            this.setState({
                isLoaded:true,
                weather:locat.weather,
                main:locat.main,
                wind:locat.wind,
                sys:locat.sys,
                location:locat.name
            });
        })
        .catch((error)=>{console.log(error)});
		
		// Weather Fetching function
      }

      componentDidMount(){
        this.weatherApi();
      }
    render(){
       
        return(
            <Card>
                {(this.state.isLoaded)? 
                    <Card.Body>
                    <h2 style={{fontFamily:'Anton'}}>WEATHER</h2>
                    <ListGroup>
                        <ListGroup.Item>Temp: <strong>{Math.floor(((this.state.main.temp)-273.15)*100)/100}&deg;C</strong> - {this.state.weather[0].main}</ListGroup.Item>
                        <ListGroup.Item>City : {this.state.location}</ListGroup.Item>
                        <ListGroup.Item>Country : {this.state.sys.country}</ListGroup.Item>
                    </ListGroup>
                    </Card.Body>:
                    <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
                }
                
            </Card>
        );
    }
}