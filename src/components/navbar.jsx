import React, { useState } from 'react'
import '../scss/main/main.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// consider making it a privet route
import About from '../pages/about';
import Competition from '../pages/competition';
import Home from '../pages/home';
import MatchInfoPage from '../pages/matchInfoPage';
import Team from "../pages/team"

// correct logo design and align it correctly
// consider links to teams
// fix the scroll to the footer
// look for good navbar designs
// fix layout of nav bar in different screen sizes

export default function Navbar() {

    const [comp, setComp] = useState({})
    const [match, setMatch] = useState(0)
    const [team, setTeam] = useState({})

    const compChoice = (comp) => {
        setComp(comp)
    }

    const matchChoice = (id) => {
        setMatch(id)
    }

    const teamChoice = (id, fixtures) => {
        setTeam({id, fixtures})
    }

    return (
        <div>
            <BrowserRouter>
                <div id="header" style={{
                    backgroundImage: `url(https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/lines.png)`}}>
                    <Link to="/">
                        <img className="header-left" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/rugby_world_logo.png`} alt="Rugby World" />
                    </Link>
                    <div className="header-options">
                        <Link className="link" to="/">HOME</Link>
                        <Link className="link" to="/about">ABOUT</Link>
                        <a className="link" href="#footer">CREDITS</a>
                    </div>
                </div>
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/competition"><Competition comp={comp} matchChoice={matchChoice} teamChoice={teamChoice}/></Route>
                    <Route path="/matchInfo/:match"><MatchInfoPage id={match}/></Route>
                    <Route path="/team"><Team team={team} comp={comp} matchChoice={matchChoice}/></Route>
                    <Route exact path="/"><Home matchChoice={matchChoice} compChoice={compChoice}/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
