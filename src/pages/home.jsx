import '../scss/home/home.css';
import React, { useEffect, useState} from 'react'
import Fixtures from "../components/fixtures";
import Competitions from '../components/competitions';
import { competitions, fixtures } from "../utils/api/mockData"
// import { competitions, fixtures } from "../utils/api/api"

    //add the logo you will make in the tab above 
    // add a header
    // add a different font to that header
    // change fonts from header to rest of page

export default function Home({ matchChoice, compChoice}) {

    const [fixtureList, setFixtureList] = useState([])
    const [results, setResults] = useState([])
    const [liveMatches, setLiveMatches] = useState([])

    useEffect(() => {
        competitions().results.forEach(comp => {
            fixtures(comp.id, comp.season).results.forEach(result => {
                if (new Date(result.date).getTime() > new Date().getTime()) {
                    setFixtureList(fixtureList => [...fixtureList, result])
                }   
                else if (result.status === "First Half" || result.status === "Half Time" || result.status === "Second Half") {
                    setLiveMatches(liveMatches => [result, ...liveMatches])
                }
                else if (new Date(result.date).getTime() < new Date().getTime()) {
                    setResults(results => [result, ...results])
                }
            })
        })
        setFixtureList(fixtureList => fixtureList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
        setResults(results => results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
        setLiveMatches(liveMatches => liveMatches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
        // return () => {
        //     setFixtureList([])
        //     setResults([])
        //     setLiveMatches([])
        // }
    }, [])

    return (
        <div className="home">
            
            <Competitions compChoice={compChoice}/>
            <div className="fixtures">
                {liveMatches.length ?
                <>
                    <h2 className="fixtures-head-line">LIVE MATCHES</h2>
                    <Fixtures fixtureList={liveMatches} matchChoice={matchChoice} numberOfFixtures={liveMatches.length}/>
                </>
                :
                <></>
                }
                <h2 className="fixtures-head-line">LATEST RESULTS</h2>
                <Fixtures fixtureList={results} matchChoice={matchChoice} numberOfFixtures={5}/>
                <h2 className="fixtures-head-line">UPCOMING FIXTURES</h2>
                <Fixtures fixtureList={fixtureList} matchChoice={matchChoice} numberOfFixtures={5}/>
            </div>
        </div>
    )
}    