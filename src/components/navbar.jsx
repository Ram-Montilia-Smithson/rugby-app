import React, { useState } from 'react'
import '../scss/main.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// consider making it a privet route
import About from '../pages/about';
import Competition from '../pages/competition';
import Competitions from '../pages/competitions';
import Home from '../pages/home';
import MatchInfoPage from '../pages/matchInfoPage';
import Team from "../pages/team"
import logo from "../utils/images/rugby world logo.png"
// correct logo design and align it correctly

export default function Navbar() {

    const [comp, setComp] = useState({})
    const [match, setMatch] = useState(0)
    const [team, setTeam] = useState({})

    const compChoice = (id, logo) => {
        setComp({id, logo})
    }

    const matchChoice = (id) => {
        setMatch(id)
    }

    const teamChoice = (id, futureFixtures) => {
        setTeam({id, futureFixtures})
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
                    <Route path="/competition"><Competition id={comp.id} logo={comp.logo} matchChoice={matchChoice} teamChoice={teamChoice}/></Route>
                    <Route path="/competitions"><Competitions compChoice={compChoice} /></Route>
                    <Route path="/matchInfo"><MatchInfoPage match={match}/></Route>
                    <Route path="/team"><Team team={team} comp_id={comp} matchChoice={matchChoice}/></Route>
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
