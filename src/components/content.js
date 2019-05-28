import React, { Component } from 'react';
import Weather from './weather';
import Ncard from './ncard';
import { Jumbotron, Button,Form,Row,Col,Spinner} from 'react-bootstrap';


export default class Content extends Component {
	constructor(){
		super();
		this.state={
			data:[],
			isLoaded:false,
			sqry:'kerala',
			lat:0,
			lgi:0,
			usrlang:'en'
		}
		let qry='technology';
	}

	changeText = (e) => {
		this.setState({
			sqry:e.target.value
		});
	}

	getNews = (e) => {
		e.preventDefault();
		this.setState({
			isLoaded:false
		});
		this.newsData();
	}
	
	newsData = () => {
		
		const token ='f1d7c94e298e120f58159223b3111be9';
		let qry=this.state.sqry;
		let la = this.state.usrlang
		fetch(`https://gnews.io/api/v2/?q=${qry}&lang=${la}&token=${token}`)
		.then((response)=>{return response.json();})
		.then((news)=>{
			this.setState({
		  		isLoaded:true,
				data:news.articles
			
	  // News Fetching function
		});});
		
		
		
		console.log(this.data);
		}
		getLocation = () => {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(position => {
									console.log(position);
									let gloc=position.coords;
									this.setState({
													lat:position.coords.latitude,
													lgi:position.coords.longitude
									});
				});
		} else {
				console.error("Geolocation is not supported by this browser!");
		}
		let lan = navigator.language || navigator.userLanguage;
		let str = lan.split("-");
		this.setState({
			usrlang:str[0]
		});
		
		}

	componentDidMount(){
		
		this.getLocation();
		this.newsData();

	}

	render(){
		
		return(
			<Row className="justify-content-md-center">
				<Col md={12}>
				
				
				<Jumbotron>
				<Weather latt={this.state.lat} long={this.state.lgi}/>
				</Jumbotron>
				
				</Col>
				<Col md={12}>
					<h2 >News Feed</h2>
				<Form onSubmit={this.getNews}>
					<input type='text' onChange={this.changeText} />
					<Button varient="primary" type="submit">search</Button>
				</Form>
				
				<Row>
					
				</Row>
				{(this.state.isLoaded)? this.state.data.map((item,index) => {
					return (<Ncard key={index} 
						title={item.title} 
						dis={item.desc} 
						link={item.link} 
						img={item.image}></Ncard>);
					}
					) : <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> }
				{}
				
				
				</Col>

				
				
			</Row>
			);
	}
}
