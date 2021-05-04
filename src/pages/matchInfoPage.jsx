import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { match } from "../utils/api/mockData"
import MatchInfoPageHeader from "../components/matchInfoPageHeader"
// import MatchInfoComponent from '../components/matchInfoComponent';
// <MatchInfoComponent id={id} showMoreInfo={[id]} link={false}/>
// use MatchInfoComponent or adjust it back to what it was
import { useParams } from "react-router";
import Events from "../components/events";
import Stats from "../components/stats"
import LineUp from "../components/lineUp"


// show all relevant info about the match, there is so much of it
// be creative as you go over the info and think how should you show it.
// charts.js
// copy from ultimate rugby
// and from other sport websites

export default function MatchInfoPage({ id }) {
    
    const [homeLineUp, setHomeLineUp] = useState([])
    const [awayLineUp, setAwayLineUp] = useState([])
    const [homeStats, setHomeStats] = useState({})
    const [awayStats, setAwayStats] = useState({})
    const [events, setEvents] = useState([])
    const [referees, setReferees] = useState([])
    const [headerInfo, setHeaderInfo] = useState({})

    const fixture = useParams().match
    
    useEffect(() => {

        const data = match(id).results

        setReferees(data.referees)
        setHeaderInfo(data.match)
        setHomeLineUp(data.home.teamsheet)
        setAwayLineUp(data.away.teamsheet)
        setHomeStats(data.home.team_stats)
        setAwayStats(data.away.team_stats)
        setEvents(data.events.sort((a, b) => a.time - b.time))

        return () => {

            setHomeStats({})
            setAwayStats({})
            setHeaderInfo({})
            setReferees([])
            setHomeLineUp([])
            setAwayLineUp([])
            setEvents([])

        }

    }, [id])

    // console.log()

    return (
        <div>
            <MatchInfoPageHeader info={headerInfo} />
            <BrowserRouter>
                <Link to={`/matchInfo/${fixture}/events`}>EVENTS</Link>
                <Link to={`/matchInfo/${fixture}/line-up`}>LINE UP</Link>
                <Link to={`/matchInfo/${fixture}/stats`}>STATS</Link>
                {/* <Link to={`/matchInfo/${fixture}`}></Link> */}
                {/* <Link to={`/matchInfo/${fixture}`}></Link> */}
                <Switch>
                    <Route path={`/matchInfo/${fixture}/events`}><Events events={events}/></Route>
                    <Route path={`/matchInfo/${fixture}/line-up`}><LineUp home={homeLineUp} away={awayLineUp} referees={referees}/></Route>
                    <Route path={`/matchInfo/${fixture}/stats`}><Stats homeStats={homeStats} awayStats={awayStats}/></Route>
                    {/* <Route path={`/matchInfo/${fixture}`}></Route> */}
                    {/* <Route exact path={`/matchInfo/${fixture}`}></Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}
