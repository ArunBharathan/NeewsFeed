import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
const cd={
    margin:'10px auto',
    boxSizing:'border-box',
    minHeight:200,overflow:'hidden',borderRadius:8,
    boxShadow:'0px 8px 15px #e5e8e8'
}
const head={
    width:'100%',
    backgroundColor:'#3498db ',
    position:'relative',
    minHeight:'50px',
    fontFamily:'Bitter',
    padding:10,
    color:'#fff'
}
const im={
    width: 150,
    height: 150
}

export default class Ncard extends Component {

    render(){
        
        return(
            <div style={cd}>
                <h4 style={head}>{this.props.title}</h4>
                {(this.props.img) &&<Card.Img variant="top" style={im} src={this.props.img}/>}
                <p style={{fontFamily:'Yanone Kaffeesatz',marginTop:'auto',padding:10}}>{this.props.dis}</p>
                <a onClick={(e)=>{window.open(this.props.link,'_blank')}} style={{
                    padding:10,fontWeight:700
                }}>Read More</a>
            </div>
            
        );
    }
}