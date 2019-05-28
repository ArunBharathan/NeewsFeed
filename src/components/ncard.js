import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
const cd={
    margin: 15,
    padding: 10
}

export default class Ncard extends Component {

    render(){
        
        return(
            <Card className="justify-content-md-center" style={cd}>
                
                <Card.Header>{this.props.title}</Card.Header>
                {(this.props.img)?<Card.Img variant="top" className="img-thumbnail" src={this.props.img}/>:<br />}
                <Card.Text>{this.props.dis}</Card.Text>
                <Card.Link href={this.props.link}>Get Full News</Card.Link>
            </Card>
        );
    }
}