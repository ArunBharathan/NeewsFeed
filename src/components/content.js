import React, { Component } from 'react';
import Weather from './weather';
import Ncard from './ncard';

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
		this.newsData();
	}
	
	newsData = () => {
		
		const token ='f1d7c94e298e120f58159223b3111be9';
		let qry=this.state.sqry;
		let la = this.state.usrlang
		fetch(`https://gnews.io/api/v2/?q=${qry}&lang=${la}&token=${token}`)
		.then((response)=>{return response.json();})
		.then((news)=>{this.setState({
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
		// this.setState({
		// 	isLoaded:true,
		// 	lat:locat.coords.latitude,
		// 	logi:locat.coords.longitude
		
		//   });

	}

	render(){
		
		
		return(
			<div>
				<p>The content goes hear</p>
				<h2>user Lang: {this.state.usrlang}</h2>
				<Weather latt={this.state.lat} long={this.state.lgi}/>
				<form onSubmit={this.getNews}>
					<input type='text' onChange={this.changeText} />
					<button>search</button>
				</form>
				<Ncard />
				<h2>Latitude:{this.state.lat}</h2>
				{this.state.data.map((item,index) => {return (<h2 key={index}>{item.title}</h2>);})}
				
			</div>
			);
	}
}
