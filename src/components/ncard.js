import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
const cd={
    margin: 15,
    padding: 10
}
const im={
    width: 150,
    height: 150
}

export default class Ncard extends Component {

    render(){
        
        return(
            <Card border="info" className="justify-content-md-center" style={{height:350,marginBottom:10,overflow:'normal',borderRadius:20}}>
                
                <Card.Body>
                <Card.Title style={{display:'flex'}}>
                     <h4 style={{fontFamily:'Bitter',width:'100%',color:'#000'}}>{this.props.title}</h4>
                </Card.Title> 
                {(this.props.img)?<Card.Img variant="top" style={im} src={this.props.img}/>:
                <div style={{width:150,height:150,backgroundColor:'#b7b7b7'}}><h4 style={{color:'#7a7a7a',padding:40}}>No Image</h4></div>}

                <Card.Text style={{fontFamily:'Yanone Kaffeesatz',marginTop:5}}>{this.props.dis}</Card.Text>
                <Card.Link href={this.props.link}>Get Full News</Card.Link>
                </Card.Body>

            </Card>
        );
    }
}