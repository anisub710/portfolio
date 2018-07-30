import React from 'react';
import {Col,Card, CardTitle} from 'react-materialize';
import './projects.css';
import Chip from 'react-materialize/lib/Chip';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



export default class Project extends React.Component  {

    render() {        
        var FaGithub = require('react-icons/lib/fa/github');
        var web = require('react-icons/lib/md/web-asset');
        const {
            projectName,
            projectImage,
            projectDesc,            
            githubLink,            
            projectLink,
            infoTags            
        } = this.props;
        
        function TagsList({infoTags}) {
            return infoTags.map(infoTag => (
                <Chip>{infoTag.tag}</Chip>
            ));
        }
        
        return(                                                                         
                <Col m={6} xl={4}>
                <ScrollAnimation animateIn = "fadeInUpBig" animateOnce = {true}> 
                    <Card header={<CardTitle reveal image= {projectImage} waves='light'/>}
                        title= {projectName}
                        reveal={projectDesc}>
                        <TagsList infoTags = {infoTags}/>
                        <p><a className = "icon" href={githubLink}> {React.createElement(FaGithub, null)} </a>                    
                        {projectLink != null && 
                            <a className = "icon" href = {projectLink}> {React.createElement(web, null)}> </a>
                        }                    
                        </p>                               
                    </Card>          
                </ScrollAnimation>
                </Col>               
        );
    }

}
