import React, { Component } from 'react';
import './App.css';
import {Row} from 'react-materialize';
import MyNavBar from "./components/navbar";
import Project from "./views/project/projects";
import Experience from "./views/experience/experience";
import About from "./views/about/about";
import MyFooter from "./components/footer";
import "animate.css/animate.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {    
    loading: true,
    } 
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2400); // simulates an async action, and hides the spinner                        
  }
  render() {
    const { loading } = this.state;            
    if(loading) { 
    return null; 
    }   
    return (
      <div>                 
            <MyNavBar/>             
            <div id = "about">                                               
                <About
                    aboutImage = "./img/profile_temp.svg"
                    aboutDesc = "Hey! My name is Anirudh Subramanyam (Ani), and I'm a Software Developer currently studying at the University of Washington."                     
                    skills = {["Go", "R", "Javascript", "Java", "Node.js", "React", "SQL", "Android", "MongoDB", "MySQL", "iOS", "Digital Ocean", "Terraform"]}
                />  
            </div>            
            <div id = "project">                                              
                <Row className = "projects-row">                 
                    <Project 
                        projectName = "344 Project"
                        projectImage = "./img/344 Unfinished.svg"
                        projectDesc = {<p>Built a server from scratch with the following features:<br/>
                            <ul>
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                            </ul>
                        </p>}
                        githubLink = ""
                        infoTags = {["Go", "Node.js", "Digital Ocean", "MySQL", "Redis"]}
                    />
                    <Project
                        projectName = "Indiceision"
                        projectImage = "./img/InDiceision.svg"
                        projectDesc = "Android application"                                             
                        githubLink = "https://github.com/heyjasonxu/Indiceision"
                        infoTags = {['Java', 'Android']}
                    />           
                    <Project
                        projectName = "Yama"
                        projectImage = "./img/Yama.svg"
                        projectDesc = "Android application"                                             
                        githubLink = "https://github.com/ask710/MessagingApp"
                        infoTags = {['Java', 'Android']}
                    />     
                    <Project
                        projectName = "Geopaint"
                        projectImage = "./img/Geopaint.svg"
                        projectDesc = "Android application"                        
                        githubLink = "https://github.com/ask710/Geopaint"
                        infoTags = {['Java', 'Android']}
                    />
                    <Project
                        projectName = "Eatout"
                        projectImage = "./img/eatout.svg"
                        projectDesc = "R application"                        
                        githubLink = "https://github.com/ask710/eatout"                        
                        projectLink = "https://ask710.shinyapps.io/eatout/"
                        infoTags = {['R']}
                    />   

                </Row>                    
            </div>
            <hr/>
            <div id = "experience">                 
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/iSchool.svg"
                        expTitle =  "University of Washington Information School"  
                        infoTags = {['Teaching Assistant']} 
                        expDesc = "Captivating description of this experience"                    
                    /> 
                </Row>
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/Indegene.svg"
                        expTitle =  "Indegene"  
                        infoTags = {['Internship']} 
                        expDesc = "Captivating description of this experience"                    
                    />   
                </Row>
                <Row className = "experience-row">  
                    <Experience
                        expImage = "./img/CloudCherry.svg"
                        expTitle = "CloudCherry"
                        infoTags = {['Internship']} 
                        expDesc = "Captivating description of this experience"                                        
                    />  
                </Row>
            </div>
            <MyFooter/>
        </div>
    );
  }
}

export default App;
