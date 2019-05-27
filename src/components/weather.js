import React, { Component } from 'react';

export default class Weather extends Component {
    constructor(){
        super();
        this.state={
            weather:[],
            main:[],
            wind:[],
            location:'india',
            sys:[]
        }
    }
    weatherApi = () => {
        let lat=this.props.latt;
        let longi=this.props.long;
		const key ='e58a8894aea9922d2c2c6685e502e1a2';
		
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&APPID=${key}`)
		.then((response)=>{return response.json();})
        .then((locat)=>{console.log(locat);
            this.setState({
                weather:locat.weather,
                main:locat.main,
                wind:locat.wind,
                sys:locat.sys,
                location:locat.name
            });
        });
		
		// Weather Fetching function
      }
      componentWillReceiveProps(){
          
          this.weatherApi();
      }
    render(){
        return(
            <div>
                <h2>Weather</h2>
                <p>your current weather info</p>
                <h3>Temp: {(this.state.main.temp)-273.15}</h3>
                <h3>City {this.state.location}</h3>
                <h3>country {this.state.sys.country}</h3>
            </div>
        );
    }
}