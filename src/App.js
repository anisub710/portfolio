import React, { Component } from 'react';
import './App.css';
import {Row} from 'react-materialize';
import MyNavBar from "./components/navbar";
import Project from "./views/project/projects";
import Experience from "./views/experience/experience";
import About from "./views/about/about";
import MyFooter from "./components/footer";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
                <Row>                                           
                <About
                    aboutImage = "./img/profile_temp.svg"
                    aboutDesc = {<p>My name is <strong className = "keyword"> Anirudh Subramanyam (Ani)</strong>, and I'm a <strong className = "keyword">Software Developer</strong> currently 
                    a senior at the <strong className = "keyword">University of Washington</strong>. 
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>} 
                />  

                {/* skills = {["Go", "R", "Javascript", "Java", "Node.js", "React", "SQL", "Android", "MongoDB", "MySQL", "iOS", "Digital Ocean", "Terraform"] */}
                </Row>
            </div>            
            <div id = "project">        
            <ScrollAnimation animateIn = "fadeIn" animateOnce = {true}>
                <h4 className = "mobile-headers">Projects</h4>            
            </ScrollAnimation>                
                <Row className = "projects-row">                                     
                    <Project 
                        projectName = "344 Project"
                        projectImage = "./img/344 Unfinished.svg"
                        projectDesc = {<p>Built a web server in Go and a microservice in Node.js with the following features and capabilites:<br/>
                            <ul>
                                <li>Page Summary: Shows preview of a URL by extracting its meta tags</li>
                                <li>An Infrastructure from Code using Terraform to host the dockerized API server and client server in Digital Ocean</li>
                                <li>Track sessions using a Redis database</li>
                                <li>Authenticate and store user information in MySQL and PostgreSQL</li>
                                <li>Allow users to upload custom profile pictures</li>
                                <li>Block repeated failed sign-ins</li>
                                <li>Forgot Password: Sends an email with an base64-encoded crypto-random code that allows to reset password</li>
                                <li>Search: Allows to search for other users based on user name, first name and last name (using trie)</li>
                                <li>Node.js microservice for channels (public and private) and messages</li>
                                <li>Real time notifications to relevant users for channel and message events using Websockets and RabbitMQ</li>
                                <li>Add Emoji reactions to messages</li>
                                <li>Star/Favorite messages</li>
                                <li>Attach media files to messages</li>


                            </ul>
                        </p>}
                        githubLink = ""
                        infoTags = {["Go", "Node.js", "Digital Ocean", "MySQL", "Redis", "RabbitMQ"]}
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
            <ScrollAnimation animateIn = "fadeIn" animateOnce = {true}>
                <h4 className = "mobile-headers">Experience</h4>            
            </ScrollAnimation> 
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/iSchool.svg"
                        expTitle =  "University of Washington Information School"  
                        infoTags = {['Teaching Assistant']} 
                        shortDesc = {<p>Teaching Assistant for INFO 448 (Mobile Development: Android) and INFO 201 (Techinical Foundations in R)</p>}
                        expDesc = {<p>Captivating description of this experience</p>}
                    /> 
                </Row>
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/Indegene.svg"
                        expTitle =  "Indegene"  
                        infoTags = {['Internship']} 
                        shortDesc = {<p> Summary description for the experience</p>}
                        expDesc = {<p>Captivating description of this experience</p>}
                    />   
                </Row>
                <Row className = "experience-row">  
                    <Experience
                        expImage = "./img/CloudCherry.svg"
                        expTitle = "CloudCherry"
                        infoTags = {['Internship']} 
                        shortDesc = {<p> Summary description for the experience</p>}
                        expDesc = {<p>Captivating description of this experience</p>}
                    />  
                </Row>
            </div>
            <MyFooter/>
        </div>
    );
  }
}

export default App;
