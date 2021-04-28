import React from 'react'
import "../scss/main/main.css"

// look for nice design to show the contact info
// contact the "live-rugby-data" API provider about use of the API legally and the credits that should be given
// set the scroll to the footer
// fix the sizes of the footer boxes
// responsiveness and sizes differences
// credits for pictures, fonts, ultimate rugby

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-element">
                <h1>contact</h1>
                <ul>
                    <li>github
                        <a href="github">
                            {/* <img/> */}
                        </a>
                    </li>
                    <li>linkedin
                        <a href="linkedIn">
                            {/* <img/> */}
                        </a>
                    </li>
                    <li>facebook?
                        <a href="facebook">
                            {/* <img/> */}
                        </a>
                    </li>
                    <li>
                        <a href = "mailto:ramsmithson2@gmail.com?subject=Rugby-App-Feedback&body=Message">
                            Ramsmithson1@gmail.com
                        </a>
                        {/* <img/> of Gmail or just an Email */}
                    </li>
                </ul>
            </div>
            <div className="footer-element">
                <h1>credits</h1>
                <ul>
                    <li>rugby live data API</li>
                    <li>whoever you stole all these pictures from</li>
                    <li>canva?</li>
                    <li>ITC?</li>
                    <li>google fonts</li>
                </ul>
            </div>
            <div className="footer-element">
                <h1>3rd option</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
