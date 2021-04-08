import React, { useState } from 'react'
import '../scss/main.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// consider making it a privet route
import About from '../pages/about';
import Competition from '../pages/competition';
import Competitions from '../pages/competitions';
import Home from '../pages/home';
import MatchInfo from '../pages/matchInfo';
import logo from "../images/rugby world logo.png"
// correct logo design and align it correctly

export default function Router() {

    const [id, setId] = useState(0)

    const competitionChoice = (id) => {
        setId(id)
    }

    return (
        <div>
            <BrowserRouter>
                <div className="header">
                    <img src={logo} alt="Rugby World" className="header-left" />
                    <div className="header-options">
                        <Link to="/">HOME</Link>
                        <Link to="/competitions">COMPETITIONS</Link>
                        <Link to="/about">ABOUT</Link>
                        <a href="#footer">CREDITS</a>
                    </div>
                </div>
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/competition"><Competition id={id} /></Route>
                    <Route path="/competitions"><Competitions competitionChoice={competitionChoice} /></Route>
                    <Route path="/matchInfo"><MatchInfo /></Route>
                    {/* <Route path="fixtures" component={ }/> */}
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
