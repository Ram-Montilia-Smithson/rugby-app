import '../scss/home.css';
import React, { useEffect, useState} from 'react'
import Fixtures from "../components/fixtures";
import { competitions, fixtures } from "../utils/api/mockData"
import Competitions from '../components/competitions';

    //add the logo you will make in the tab above 

export default function Home({ matchChoice, compChoice}) {

    const [fixtureList, setFixtureList] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {
        competitions().results.forEach(comp => {
            fixtures(comp.id).results.forEach(result => {
                if (new Date(result.date).getTime() > new Date().getTime() || result.status === "First Half" || result.status === "Half Time" || result.status === "Second Half") {
                    setFixtureList(fixtureList => [...fixtureList, result])
                }   
                else if (new Date(result.date).getTime()<new Date().getTime()) {
                    setResults(results => [result, ...results])
                }
            })
            setFixtureList(fixtureList => fixtureList.sort((a, b) =>  a.date - b.date ))
            setResults(results => results.sort((a, b) =>  a.date - b.date ))
        });
        return () => {
            setFixtureList([])
            setResults([])
        }
    }, [])

    return (
        <div className="home">
            <div className="home-top">
                <h1 className="line">RUGBY WORLD</h1>
                <h2>HERE YOU CAN FIND ALL COMPETITIONS, LATEST RESULTS AND UPCOMING MATCHES FROM ALL OVER THE WORLD</h2>
            </div>
            <div className="comps">
                <Competitions compChoice={compChoice}/>
            </div>
            <div className="last-results">
                <h2>LATEST RESULTS</h2>
                <Fixtures fixtureList={results} matchChoice={matchChoice} numberOfFixtures={14}/>
                <h2>UPCOMING FIXTURES</h2>
                <Fixtures fixtureList={fixtureList} matchChoice={matchChoice} numberOfFixtures={14}/>
            </div>
        </div>
    )
}    