import React from 'react';
import '../../index.css';
import './about.css'
import ScrollAnimation from 'react-animate-on-scroll';
export default class About extends React.Component  {

    timer(place){
        var go = document.getElementById(place);        
        var current = window.pageYOffset;
        var threshold = go.offsetTop;        
        var timerID;
        if(threshold - current > 100){
            var t = 1;
            var timerID = setInterval(function() {                
                window.scrollBy(0, t);
                if(window.pageYOffset >= threshold - 45) {
                    clearInterval(timerID);                
                }
                t = t + 0.7;
            }, 10);         
        } 
        return timerID;
    
    }

    render() {
        let down = require('react-icons/lib/md/keyboard-arrow-down');
        const {
            aboutImage,
            aboutDesc,
            langSkills,
            tools
        } = this.props;

        function SkillsList({skills}) {
            let result = skills[0];            
            for (let i = 1; i < skills.length; i++) {
                // skills[i] = 
                // <ScrollAnimation animateIn = {(i % 2 == 0) ? "bounceInLeft":"bounceInRight"} animateOnce = {true}>
                //     <p className = "about-chip">{skills[i]}</p>
                // </ScrollAnimation>;
                result += ", " + skills[i];
            }
            return result;
        }

        return( 
            <ScrollAnimation animateIn = "fadeIn" animateOnce = "true">
               <div id = "about-page">
                    {/* <img alt = "profile" id = "image-holder" src = {aboutImage}/> */}
                    <div id = "content">                        
                        <h1 id = "greetings"> Hey! </h1> 
                        <p className = "about-desc"> {aboutDesc}</p> 
                        <p className = "about-desc"><strong className = "skills-header">Languages and Frameworks I have worked with:</strong> <SkillsList skills = {langSkills}/></p>
                        <p className = "about-desc"><strong className = "skills-header">Tools I have worked with:</strong> <SkillsList skills = {tools}/></p>                        
                    </div> 
                        <a className = "arrow-down" onClick = {() => {this.timer("project")}} href="#Project"> {React.createElement(down, null)} </a>                 
                </div>
            </ScrollAnimation>
        );
    }

}
 {/* <div id = "container">
    <div id = "top">
        <div id = "intro">
            <h4 className = "about-desc">{aboutDesc}</h4>
        </div>
        <img alt = "profile" id= "image-holder" src = {aboutImage}/>
    </div>   
    <div id = "bottom">  
        <div className = "skills-container">
            <h5> Technical Skills: <SkillsList skills = {skills}/> </h5>                             
        </div>
    </div>
</div>    */}