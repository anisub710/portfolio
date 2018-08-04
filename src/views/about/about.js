import React from 'react';
import '../../index.css';
import './about.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Chip from 'react-materialize/lib/Chip';
export default class About extends React.Component  {

    render() {
        const {
            aboutImage,
            aboutDesc,
            skills
        } = this.props;

        function SkillsList({skills}) {
            for (let i = 0; i < skills.length; i++) {
                skills[i] = 
                <ScrollAnimation animateIn = {(i % 2 == 0) ? "bounceInLeft":"bounceInRight"} animateOnce = {true}>
                    <p className = "about-chip">{skills[i]}</p>
                </ScrollAnimation>;
            }
            return skills
        }

        return( 
            <ScrollAnimation animateIn = "fadeIn" animateOnce = "true">
                <div id = "container">
                    <div id = "top">
                        <img alt = "profile" id= "image-holder" src = {aboutImage}/>
                    </div>   
                    <div id = "bottom">
                        <p className = "about-desc"> {aboutDesc} </p>  
                        <div className = "skills-container">
                            <SkillsList skills = {skills}/>          
                        </div>
                    </div>
                </div>   
            </ScrollAnimation>
        );
    }

}