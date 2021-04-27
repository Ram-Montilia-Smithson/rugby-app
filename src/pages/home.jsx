import React from 'react'
import '../scss/home.css';
import {Link} from "react-router-dom";

// here you add welcome to the website and some basic explanations
// at the end of the explanation, add a link to competitions
// make the home page like the nav bar but ilustrated 
// copy from ultimate rugby
// be creative, think of some nice layout and features to add

export default function Home() {
    return (
        <div>
            <h1>home</h1>
            <div className="head-line">
                <div className="head-line-child">RUGBY WORLD</div>
            </div>
            <div className="line">
                <div className="line-child">HERE YOU CAN FIND ALL WHAT'S</div>
                <div className="line-child">NEW IN THE WORLD OF RUGBY</div>
                <div className="line-child">go to Competition link in the nav bar on top or start just press down</div>
            </div>
            <div className="button">
                <Link to="/competitions" className="button-child">here</Link>
            </div>
        </div>
    )
}
