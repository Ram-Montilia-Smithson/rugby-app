import React from 'react'
import { BrowserRouter, Link, NavLink } from "react-router-dom"
import logo from "../images/rugby world logo.png"

// here you add the top nav bar
// including the logo on the left and the stripes
// in the nav bar, you will ad these options:
// competitions - teams - about - credits(consider more)
// credits will show at all pages at the bottom including contact information
// decide weather to use Link or NavLink and figure out why you need to refresh every time to update the page according to the URL

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Rugby World" className="header-left" />
            <BrowserRouter className="header-options">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/competitions">COMPETITIONS</NavLink>
                <Link to="/about">ABOUT</Link>
                {/* <NavLink to="/fixtures">FIXTURES</NavLink> */}
                {/* <NavLink to="same as home page but down to see contact and credits">CONTACT</NavLink> */}
                
            </BrowserRouter>
        </div>
    )
}
