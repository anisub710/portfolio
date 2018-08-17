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
                    a senior pursuing <strong className = "keyword">Informatics</strong> at the <strong className = "keyword">University of Washington</strong>. 
                     I aim to increasingly integrate accessible technology into society, especially in <strong className = "keyword">health care</strong> and <strong className = "keyword">education</strong>. I believe 
                     that my exposure to various cultures having lived and studied in cities such as Mumbai, Bangalore, Singapore, London and Seattle, 
                     and my involvment in the community provides me a strong perspective to build <strong className = "keyword">user-centered technology.</strong></p>} 
                    skills = {["Go", "R", "Javascript", "Java", "Node.js", "React", "SQL", "Android", "MongoDB", "MySQL", "iOS", "Digital Ocean", "Terraform"]}
                />                  
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
                        projectDesc = {<p>Indiceision is for the indecisive. The purpose is to facilitate human interaction by removing the analysis paralysis of choosing an activity. 
                        Indiceision will help users decide on food locations based on certain preferences like type, price, distance and location. This was a group project, in which I 
                        worked on the user profiles, ratings, the notifications and the result after responding to the notification. It has the following components:
                        <ul>
                            <li>Database: The application uses Firebase to handle user authentication and to store data about the restaurants each user visited and whether they liked it
                                 or not (this can be viewed in their profile in the application). Firebase is also used to store the number of times each restaurant is suggested, how 
                                 many of the users that were suggested the restaurant actually visited the restaurant and whether they liked it or not, collected from a notification sent 
                                 30 minutes after the user presses go (but pops up immediately after pressing go for the demo).</li>
                            <li>Roll a Dice: After signing in, you can shake the phone to 'roll the dice'. You will notice the result restaurant (queried from the Yelp API based on your 
                                location using the Google Maps API) changing based on the dice. </li>
                            <li>Result Screen: This screen shows the restaurant chosen from the dice roll with information about the restaurant, Yelp's rating, our rating (based on the data stored in Firebase),
                                 where it is located, and the ability to share, call or go to that location (which takes you straight to walking navigation in google maps).</li>
                            <li>Notification: The response from the notification provides information about the restaurant that is used for the rating and whether or not the user went to the restaurant 
                                and liked it (which will show up on their profile)</li>
                        </ul>
                        </p>}
                        githubLink = "https://github.com/heyjasonxu/Indiceision"
                        infoTags = {['Java', 'Android']}
                    />           
                    <Project
                        projectName = "Yama"
                        projectImage = "./img/Yama.svg"
                        projectDesc = {<p>Yama is a simple Android messaging application that allows to:     
                            <ul>
                                <li>Pick a contact and send a text message to that contact</li>
                                <li>Get notifications for received messages</li>
                                <li>Have customizable auto-reply messages once a message is received.</li>
                            </ul>
                            </p>}                                        
                        githubLink = "https://github.com/ask710/MessagingApp"
                        infoTags = {['Java', 'Android']}
                    />     
                    <Project
                        projectName = "Geopaint"
                        projectImage = "./img/Geopaint.svg"
                        projectDesc = {<p>Geopaint is a an Android application that allows to:     
                            <ul>
                                <li>Track mobile location and trace the movement on a map (using Google Map API)</li>
                                <li>Change colors during drawings on the map</li>
                                <li>Save and share drawings</li>
                            </ul>
                        </p>}                              
                        githubLink = "https://github.com/ask710/Geopaint"
                        infoTags = {['Java', 'Android']}
                    />
                    <Project
                        projectName = "Waste Management Database"
                        projectImage = "./img/database.svg"
                        projectDesc = {<p>This is a database for waste collection at University of Washington that can be used to:
                            <ul>
                                <li>Categorize waste and their respective proper disposal procedures </li>
                                <li>Improve safety and health</li>
                                <li>Improve sustainability</li>
                                <li>Eliminate accidents and hazards</li>
                                <li>Connect each “collection” of waste to a collector</li>
                                <li>Track locations to be collected from</li>
                                <li>Track schedule of collectors</li>
                                <li>Track incidents during collections</li>
                            </ul>                            
                            </p>}
                        githubLink = "https://github.com/ask710/Waste-Management-Database"
                        infoTags = {['SQL']}
                    /> 
                    <Project
                        projectName = "Eatout"
                        projectImage = "./img/eatout.svg"
                        projectDesc = {<p>Eatout is an application made in R and deployed using Shiny that:     
                            <ul>
                                <li>Shows average ratings of each state using the Yelp API on a choropleth map (using Leaflet).</li>
                                <li>Allows to click/search for specific locations providing the restauraunts in the area.</li>
                                <li>Shows the composition of cuisines in that location as a pie chart.</li>
                                <li>Allows to click on markers for more information on the restaurant and has a table showing all the restaurants in that location with ratings.</li>
                            </ul>
                            This was a group project, in which I worked on connecting to the Yelp API, collecting and cleaning the received data, and making the choropleth map.
                            </p>}
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
                        time = "SEPTEMBER 2017 - CURRENT" 
                        infoTags = {['Teaching Assistant', 'Android', 'R']} 
                        shortDesc = {<p>Teaching Assistant for INFO 448 (Mobile Development: Android) and INFO 201 (Techinical Foundations in R)</p>}
                        expDesc = {<p>Captivating description of this experience</p>}
                    /> 
                </Row>
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/Indegene.svg"
                        expTitle =  "Indegene"  
                        time = "JUNE 2018 - SEPTEMBER 2018"
                        infoTags = {['Internship', 'Go', 'MongoDB']} 
                        shortDesc = {<p> Developed an API backed by machine learning models to predict campaign performance</p>}
                        expDesc = {<p>Captivating description of this experience</p>}
                    />   
                </Row>
                <Row className = "experience-row">  
                    <Experience
                        expImage = "./img/CloudCherry.svg"
                        expTitle = "CloudCherry"
                        time = "JULY 2016 - AUGUST 2016"
                        infoTags = {['Internship', 'Java']} 
                        shortDesc = {<p>Helped determine effsectivenes of CloudCherry's sentiment analytics tool.</p>}
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
