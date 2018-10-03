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
                    aboutDesc = {<p>My name is <strong> Anirudh Subramanyam (Ani)</strong>, and I'm a <strong>Software Developer</strong> currently 
                    a senior pursuing <strong>Informatics</strong> at the <strong>University of Washington</strong>. 
                     I aim to increasingly integrate accessible technology into society, especially in <strong>health care</strong> and <strong>education</strong>. I believe 
                     that my exposure to various cultures having lived and studied in cities such as Mumbai, Bangalore, Singapore, London and Seattle, 
                     and my involvment in the community provides me a strong perspective to build <strong>user-centered technology.</strong></p>} 
                    skills = {["Go", "R", "Javascript", "Java", "Node.js", "React.js", "SQL", "Android", "MongoDB", "MySQL", "iOS", "PHP", "Firebase", "Digital Ocean", "Terraform"]}/>
                </Row>
            </div>            
            <div id = "project">        
            <ScrollAnimation animateIn = "fadeIn" animateOnce = {true}>
                <h4 className = "mobile-headers">Projects</h4>            
            </ScrollAnimation>                
                <Row className = "projects-row">                                     
                    <Project 
                        projectName = "Slack-esque"
                        projectImage = "./img/Slack-esque.svg"
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
                        githubLink = "https://github.com/ask710/slack-esque"
                        infoTags = {["Go", "Node.js", "Digital Ocean", "MySQL", "Redis", "RabbitMQ"]}
                    />
                    <Project
                        projectName = "In'dice'ision"
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
                        projectName = "News"
                        projectImage = "./img/News.svg"
                        projectDesc = {<p>News is an Android application that allows to:
                            <ul>
                                <li>View a list of recent news stories so I can know what is going on in the world.</li>
                                <li>Search for recent news about a particular topic.</li>
                                <li>Easily preview stories so I can determine if they are relevant to my interests.</li>
                                <li>Share news stories with others so they too can be informed.</li>
                            </ul>
                        </p>}                              
                        githubLink = "https://github.com/ask710/Geopaint"
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
                        projectName = "Maze Solver"
                        projectImage = "./img/Maze.svg"
                        projectDesc = {<p>Pair programming project that implements:  
                           
                            <ul>
                                <li>An ArrayDisjointSet class using array-based representation</li>
                                <li>A Graph's constructor</li>
                                <li>A findMinimumSpanningTree method using Kruskal's algorithm</li>
                                <li>A KruskalMazeCarver method which generated random mazes by removing random walls while ensuring the maze is still solvable </li>
                                <li>A findShortestPathBetween method that used Dijkstra's algorithm to solve for the shortest path to solve a given maze</li>                                
                            </ul>
                        </p>}                              
                        githubLink = "https://github.com/aaronluannguyen/mazesolver"
                        infoTags = {['Java', 'Data Structures and Algorithms']}
                    />  

                    <Project
                        projectName = "Search Engine"
                        projectImage = "./img/Search.svg"
                        projectDesc = {<p>Pair programming project that implements:   
                            <ul>
                                <li>jUnit tests for ArrayHeap and Searcher.topKSort() classes/methods</li>
                                <li>An ArrayHeap class</li>
                                <li>The Searcher.topKSort() method that returns the top k elements from a list of n elements</li>
                                <li>Search engine would perform searches via a downloaded file of websites and their contents</li>
                                <li>Code for a Term Frequency and Inverse Document Frequency ranking class that measures how important a given word is to a particular document</li>
                                <li>A relevance computer that determined how relevant an algorithm is to a query</li>
                                <li>A web graph that represented the internet where each webpage was a vertex and each link was an edge. This graph was represented through using an adjacency list</li>
                                <li>A PageRank method which precomputes the page rank for every webpage in the graph</li>
                            </ul>
                        </p>}                              
                        githubLink = "https://github.com/aaronluannguyen/searchengine"
                        infoTags = {['Java', 'Data Structures and Algorithms']}
                    />  

                    <Project
                        projectName = "Calculator"
                        projectImage = "./img/Calculator.svg"
                        projectDesc = {<p>Pair programming project that implements:   
                            <ul>
                                <li>A Double LinkedList</li>
                                <li> An Array Dictionary </li>
                                <li>A Chained Hash Dictionary</li>
                                <li>A Chained Hash Set</li>
                                <li>An Abstract Syntax Tree for mathematical expressions</li>
                                <li>Plot handler for the expressions</li>
                            </ul>
                        </p>}                              
                        githubLink = "https://github.com/aaronluannguyen/calculator"
                        infoTags = {['Java', 'Data Structures and Algorithms']}
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
                        infoTags = {['Teaching Assistant', 'Android', 'Kotlin', 'R']} 
                        shortDesc = {<p>Teaching Assistant for INFO 448 (Mobile Development: Android) and INFO 201 (Techinical Foundations in R)</p>}
                        expDesc = {<div>
                            <p><strong className = "sub-heading">INFO 448 - Android Development:</strong> Plan and conduct lab sections instructing students in Android development using Kotlin.
                         Design and grade homework and lab assignments. (September 2018 - Current)</p>
                         <p><strong className = "sub-heading">INFO 201 - Technical Foundations:</strong> Planned and conducted lab sections instructing students in R and Github.  
                         Designed and graded homework and lab assignments. Built automated test scripts to grade assignments. (September 2017 - June 2018)</p>
                         </div>}
                    /> 
                </Row>
                <Row className = "experience-row">                                 
                    <Experience
                        expImage = "./img/Indegene.svg"
                        expTitle =  "Indegene"  
                        time = "JUNE 2018 - SEPTEMBER 2018"
                        infoTags = {['Intern', 'Go', 'MongoDB']} 
                        shortDesc = {<p> Helped the company transition from intuition based campaign journey to a data driven one
                            by incorporating machine learning to predict campaign performance data and also to provide guidance 
                            on optimal allocation of resources to have the best chance of achieving a target performance. Developed 
                            an API backed by machine learning models to predict campaign performance</p>}
                        expDesc = {<div><p>I initiated the company’s transition of campaign journey analysis from an intuition based method 
                            to a data driven one. This transition:
                                <ul>
                                    <li>Makes performance predictable and makes decisions more reliable since it is backed by actual data.</li>                                
                                    <li>Helps evaluate whether goals are achievable based on factors such as content, audience, budget 
                                        and designs.</li>
                                    <li>Allows for dynamic evaluation of the resources allocated based on the performance, such as 
                                        change their budget or design to improve chances of achieving their targets.</li>
                                </ul>
                            This is done by using machine learning models to predict performance, and also to provide guidance on optimal allocation of resources 
                            to have the best chance of achieving a target performance.</p>
                            <p>I first created a prototype for interface and a plan for the backend server 
                            that allows to add JSON files with data supported by a backend Go server, adds the data to the database and uses the data periodically to update models.
                            </p>
                            <p>After which, I created a development build of the Go server with a NoSQL database (MongoDB) to store data with varying structures. Simultaneously, I had 
                            to identify Basic variables (parameters that are provided/given), Guided variables (parameters that can be varied based on other factors in order to get optimum performance) 
                            from the provided sample data. Eventually I identified models using basic and guided variables to predict performance, and models using basic and performance variables to 
                            predict guided variables.</p>
                            </div>}
                    />   
                </Row>
                <Row className = "experience-row">  
                    <Experience
                        expImage = "./img/CloudCherry.svg"
                        expTitle = "CloudCherry"
                        time = "JULY 2016 - AUGUST 2016"
                        infoTags = {['Intern', 'Java']} 
                        shortDesc = {<p>Helped determine effectivenes of CloudCherry's sentiment analytics tool.</p>}
                        expDesc = {<p>This internship was my first time I was introduced to sentiment analysis. During the internship I:
                                <ul>
                                    <li>Spent time to familiarize myself with the concept of sentiment analysis and different applications of sentiment analysis. </li>
                                    <li>Familiarized myself with CloudCherry’s API. Then I was assigned to build a program to compare the accuracy of CloudCherry’s 
                                        sentiment analysis with other major sentiment analysis products such as Watson by IBM. </li>
                                    <li>Provided insights on where deduced sentiments differed, and hence what CloudCherry did better, and what CloudCherry could do 
                                        better to improve, using the results from the comparison program I built</li>
                                </ul>
                    </p>}
                    />  
                </Row>
            </div>
            <MyFooter/>
        </div>
    );
  }
}

export default App;
