import React, { Component } from 'react';

export default class Content extends Component {
	constructor(){
		super();
		this.state={
			data:[]
		}
		let qry='technology';
	}

	componentDidMount(){
		fetch('https://gnews.io/api/v2/?q=technology&lang=ml&token=f1d7c94e298e120f58159223b3111be9')
  			.then((response) => {return (response.json());})
			.then((myJson) => {this.setState({data:myJson.articles})});
			console.log(this.state.data);
	}

	render(){
		return(
			<div>
				<p>The content goes lol hear</p>
				{this.state.data.map((item,index) => {return (<h2 key={index}>{item.title}</h2>);})}
				
			</div>
			);
	}
}
