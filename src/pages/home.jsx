import React from 'react'
import '../scss/main.css';


// here you add welcome to the website and some basic explanations

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
            </div>
            <div className="button">
                <div className="button-child">Book a Demo</div>
            </div>
        </div>
    )
}
