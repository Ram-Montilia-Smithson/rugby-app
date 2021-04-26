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

// correct logo design and align it correctly
// consider links to teams
// fix the scroll to the footer
// look for good navbar designs
// fix layout of nav bar in different screen sizes

export default function Navbar() {

    const [comp, setComp] = useState(0)
    const [match, setMatch] = useState(0)
    const [team, setTeam] = useState({})

    const compChoice = (id) => {
        setComp({id})
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
                <div className="header" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/lines.png)`}}>
                    <img src={`${process.env.PUBLIC_URL}/images/rugby world logo.png`} alt="Rugby World" className="header-left" />
                    <div className="header-options">
                        <Link to="/">HOME</Link>
                        <Link to="/competitions">COMPETITIONS</Link>
                        <Link to="/about">ABOUT</Link>
                        <a href="#footer">CREDITS</a>
                    </div>
                </div>
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/competition"><Competition id={comp} matchChoice={matchChoice} teamChoice={teamChoice}/></Route>
                    <Route path="/competitions"><Competitions compChoice={compChoice} /></Route>
                    <Route path="/matchInfo"><MatchInfoPage match={match}/></Route>
                    <Route path="/team"><Team team={team} comp_id={comp} matchChoice={matchChoice}/></Route>
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
