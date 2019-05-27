import React, { Component } from 'react';

export default class Weather extends Component {
    weatherApi = () => {
		const key ='e58a8894aea9922d2c2c6685e502e1a2';
		
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=kerala&APPID=${key}`)
		.then((response)=>{return response.json();})
		.then((locat)=>{console.log(locat.weather)});
		
		
		
		console.log(this.data);
		// Weather Fetching function
	  }
    render(){
        return(
            <div>
                <h2>Weather</h2>
            </div>
        );
    }
}