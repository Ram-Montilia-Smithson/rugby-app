import React from 'react'
import "../scss/main.css"

// footer should include the contact info and the credits
// the footer should be linked to the right buttons in the navbar that should send the page down to see the footer
// look for nice design to show the contact info
// contact the "live-rugby-data" API provider about use of the API legally and the credits that should be given

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
                    <li>other options
                        <a href="other options">
                            {/* <img/> */}
                        </a>
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
