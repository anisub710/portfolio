import React from 'react';
import '../../index.css';
import './experience.css';
import {Modal, Button} from 'react-materialize';
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
            shortDesc,
            expDesc            
        } = this.props;


        return(                   
            <div className = "clearfix">           
            <ScrollAnimation animateIn = "fadeIn" animateOnce = {true}>     
                <img className = "job-image" src = {expImage}/>
                <h5 className = "expTitle"> {expTitle} </h5>                
                <Tags infoTags = {infoTags}/>
                {shortDesc}
                <Modal
                fixedFooter
                header= {expTitle}
                trigger={<Button className = "modal-btn"><p>Learn More</p></Button>}>
                {expDesc}
                </Modal>
            </ScrollAnimation>
            </div>          
        );
    }

}