import React from 'react';
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
                        <img alt = "profile" id= "image-holder" src = {aboutImage}/>
                    </div>   
                    <div id = "bottom">
                        <p className = "aboutDesc"> {aboutDesc} </p>                
                    </div>
                </div>   
            </ScrollAnimation>
        );
    }

}