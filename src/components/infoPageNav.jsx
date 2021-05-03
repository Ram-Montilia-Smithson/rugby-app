import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Events from './events';
import MatchInfoComponent from './matchInfoComponent';
import Pitch from './pitch';


// show both pitches side by side
// <MatchInfoComponent id={id} showMoreInfo={[id]} link={false}/>

export default function InfoPageNav({ id, homeTeam, awayTeam, events }) {
    


    return (
        <div>
            <BrowserRouter>
                
                <Link to="/matchInfo/events">EVENTS</Link>
                <Link to="/matchInfo/line-up">LINE UP</Link>
                        
                <Switch>
                    <Route path="/matchInfo/events"><Events events={events}/></Route>
                    <Route path="/matchInfo/line-up"><Pitch team={homeTeam} /><Pitch team={awayTeam} /></Route>
                    <Route path=""></Route>
                    <Route path=""></Route>
                    <Route exact path=""></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
