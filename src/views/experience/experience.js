import React from 'react';
import '../../index.css';
import './experience.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Tags from '../../components/tags'

export default class Experience extends React.Component  {

    render() {
        //link image to website 
        var web = require('react-icons/lib/md/web-asset');
        const {
            expImage,
            expTitle,
            infoTags,
            expDesc            
        } = this.props;


        return(                   
            <div className = "clearfix">           
                <ScrollAnimation animateIn = "slideInLeft" animateOnce = {true}>     
                    <img className = "job-image" src = {expImage}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn = "fadeIn" animateOnce = {true}>     
                    <h5 className = "expTitle"> {expTitle} </h5>                
                    <Tags infoTags = {infoTags}/>
                    {expDesc}
                </ScrollAnimation>
            </div>          
        );
    }

}