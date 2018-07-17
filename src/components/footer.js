import React from 'react';
import {Footer} from 'react-materialize';
import '../index.css';
import './footer.css';

export default class MyFooter extends React.Component {
    render() {
        var FaGithub = require('react-icons/lib/fa/github');
        var FaLinkedIn = require('react-icons/lib/fa/linkedin');
        var FaMail = require('react-icons/lib/fa/envelope');
        var githubLink = 'https://github.com/ask710';
        var linkedin = 'https://www.linkedin.com/in/anirudh-subramanyam/'
        var mail = 'mailto:ask710@uw.edu'
        return(
            <Footer copyrights = "Made by Anirudh Kumar Subramanyam"
                links={
                    <ul>
                    <li><a className = "icon" href={githubLink}> {React.createElement(FaGithub, null)}</a></li>
                    <li><a className = "icon" href={linkedin}> {React.createElement(FaLinkedIn, null)}</a></li>
                    <li><a className = "icon" href={mail}> {React.createElement(FaMail, null)}</a></li>                    
                    </ul>
                }
                className='my-footer'
                >                    
                    <h5> Add more content </h5>
                </Footer>
        );
    }
}