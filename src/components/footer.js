import React from 'react';
import {Footer, Row, Col} from 'react-materialize';
import './footer.css';

export default class MyFooter extends React.Component {
    render() {
        var FaGithub = require('react-icons/lib/fa/github');
        var FaLinkedIn = require('react-icons/lib/fa/linkedin');
        var FaMail = require('react-icons/lib/fa/envelope');
        var FaFile = require('react-icons/lib/fa/file-text');
        var githubLink = 'https://github.com/ask710';
        var linkedin = 'https://www.linkedin.com/in/anirudh-subramanyam/';
        var mail = 'mailto:ask710@uw.edu';
        const {resume} = this.props;        
        return(
            <div className = "footer copyright my-footer">
                <Row>
                    <Col s={0} l={3}/>
                    <Col s={9} l={4}>
                        <p><a className = "repo" href = "https://github.com/ask710/portfolio/tree/master">© Made by Anirudh Kumar Subramanyam</a></p>
                    </Col>
                    <Col s={3} l={5} className = "icons-col">
                        <a className = "icon" href={githubLink}> {React.createElement(FaGithub, null)}</a>
                        <a className = "icon" href={linkedin}> {React.createElement(FaLinkedIn, null)}</a>
                        <a className = "icon" href={mail}> {React.createElement(FaMail, null)}</a>
                        <a className = "icon" href= {resume}> {React.createElement(FaFile, null)}</a>
                    </Col>
                </Row>
            </div>
        );
    }
}

{/* <footer className = "page-footer my-footer">
                <div className="container">
                    <Row>
                        <Col s={8} l={8}>
                            <h6><blockquote>Hire Ani! He is the best</blockquote><p className = "quote">- Literally Everyone</p> </h6>
                        </Col>  
                        <Col s={4} l={4}>
                            <ul>
                                <li><a className = "icon" href={githubLink}> {React.createElement(FaGithub, null)}</a></li>
                                <li><a className = "icon" href={linkedin}> {React.createElement(FaLinkedIn, null)}</a></li>
                                <li><a className = "icon" href={mail}> {React.createElement(FaMail, null)}</a></li>                    
                            </ul>
                        </Col>                      
                    </Row>                    
                    <p><a className = "repo" href = "https://github.com/ask710/portfolio/tree/master">© Made by Anirudh Kumar Subramanyam</a></p>
                </div>
            </footer>        */}