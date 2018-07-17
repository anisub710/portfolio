import React from 'react';
import {Parallax, Row,Col,Card, CardTitle} from 'react-materialize';
import '../../index.css';
import './about.css'
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends React.Component  {

    render() {
        const {
            aboutImage,
            aboutDesc
        } = this.props;
        return( 
            <ScrollAnimation animateIn = "fadeIn" animateOnce = "true">
                <div id = "container">
                    <div id = "top">
                        <img id= "image-holder" src = {aboutImage}/>
                    </div>   
                    <div id = "bottom">
                        <p className = "aboutDesc"> {aboutDesc} </p>                
                    </div>
                </div>   
            </ScrollAnimation>
        );
    }

}