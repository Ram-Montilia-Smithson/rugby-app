import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import "../scss/main/main.css"

// look for nice design to show the contact info
// fix the sizes of the footer boxes
// responsiveness and sizes differences
// credits for pictures, fonts, ultimate rugby

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-element">
                <div className="contact-list">
                    <a href="https://github.com/Ram-Montilia-Smithson">
                        <img src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/github.png`} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ram-montilia-smithson/">
                        <img src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/linkedin.png`} alt="linkedIn" />
                    </a>
                
                    <a href="https://www.facebook.com/people/Ram-Montilia-Smithson/100009116608872/">
                        <img src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/facebook.png`} alt="facebook" />
                    </a>
                
                    <a href = "mailto:ramsmithson2@gmail.com?subject=Rugby-App-Feedback&body=Message">
                        <img src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/gmail.png`} alt="mail" />
                    </a>
                </div>
            </div>
            <div className="footer-element">
                <h1>credits</h1>
                <ul>
                    <a href="https://rapidapi.com/sportcontentapi/api/rugby-live-data">Rugby Live Data API</a>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <li>whoever you stole all these pictures from</li>
                    <li>canva?</li>
                    <li>ITC?</li>
                </ul>
            </div>
            <div className="footer-element">
                <h1>3rd option</h1>
                <ul className="footer-router">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a className="link" href="#header">TOP</a>
                </ul>
            </div>
        </div>
    )
}
