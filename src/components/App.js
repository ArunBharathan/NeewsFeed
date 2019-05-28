import React,{ Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import {Container } from 'react-bootstrap';


export default class App extends Component {
	render(){
		return(
			<div>
				<Container>
				<Header />
				<Content />
				<Footer />
				</Container>
			</div>
			);
	}
}