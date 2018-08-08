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
                        <div id = "intro">
                            <h4 className = "about-desc">{aboutDesc}</h4>
                        </div>
                        {/* <img alt = "profile" id= "image-holder" src = {aboutImage}/> */}
                    </div>   
                    <div id = "bottom">  
                        <div className = "skills-container">
                            {/* <h5> Technical Skills: <SkillsList skills = {skills}/> </h5>                              */}
                        </div>
                    </div>
                </div>   
            </ScrollAnimation>
        );
    }

}