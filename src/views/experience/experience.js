import React from 'react';
import '../../index.css';
import './experience.css';
import {Row,Col,Card, CardTitle, Badge, Chip} from 'react-materialize';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Experience extends React.Component  {

    render() {
        var web = require('react-icons/lib/md/web-asset');
        const {
            expImage,
            expTitle,
            infoTags,
            expDesc            
        } = this.props;

        function TagsList({infoTags}) {
            return infoTags.map(infoTag => (
                <Chip>{infoTag.tag}</Chip>
            ));
        }

        return(                       
            <div className = "clearfix">           
                <ScrollAnimation animateIn = "slideInLeft" animateOnce = {true}>     
                    <img className = "job-image" src = {expImage}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn = "fadeIn" animateOnce = {true}>     
                    <h4 className = "expTitle"> {expTitle} </h4>                
                    <TagsList infoTags = {infoTags}/>
                    <br/>
                    {expDesc}
                </ScrollAnimation>
            </div>               

        );
    }

}