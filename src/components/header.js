import React, { Component } from 'react';
import './App.css';
export default class Header extends Component {
	render(){
		return(
			<div className='header'>
				<h2 style={{textAlign:'center',paddingTop:6,fontFamily:'Anton',color:'#fff'}}>NEWS FEED</h2>
				<button className='btn-weather'>Weather</button>
			</div>
			);
	}
}