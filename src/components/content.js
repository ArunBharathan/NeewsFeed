import React, { Component } from 'react';
import Weather from './weather';
import Ncard from './ncard';

export default class Content extends Component {
	constructor(){
		super();
		this.state={
			data:[],
			isLoaded:false,
			cod:[],
			lat:0,
			lgi:0
		}
		let qry='technology';
	}
	
	newsData = () => {
		const token ='f1d7c94e298e120f58159223b3111be9';
		let qry='messi';
		fetch(`https://gnews.io/api/v2/?q=kerala&token=f1d7c94e298e120f58159223b3111be9`)
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
		}

	componentDidMount(){
		this.newsData();
		this.getLocation();
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
				<Weather />
				<Ncard />
				<h2>Latitude:{this.state.lat}</h2>
				{this.state.data.map((item,index) => {return (<h2 key={index}>{item.title}</h2>);})}
				
			</div>
			);
	}
}
