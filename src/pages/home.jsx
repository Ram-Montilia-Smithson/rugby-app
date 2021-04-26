import React from 'react'
import '../scss/main.css';
import {Link} from "react-router-dom";

// here you add welcome to the website and some basic explanations
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
                <div className="line-child">HERE YOU CAN FIND ALL THE RUGBY</div>
                <div className="line-child">STATS FROM AROUND THE WORLD</div>
                <div className="line-child">go to Competition link in the nav bar on top or start just press down</div>
            </div>
            <div className="button">
                <Link to="/competitions" className="button-child">here</Link>
            </div>
        </div>
    )
}
