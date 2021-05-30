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
    // להוריד קוויים מתחת למילים
    // להוריד בורדר ולעגל פינות
    // להחליף צבעים לגוונים של לבן ואפור
    // להקטין תמונות של תחרויות
    // לעצב נאב באר של matchinfipage
    // להקטין ולעצב את איוונטס
    // להציג בגרפים את סטאטס
    // להקטין ולעצב את ליין אפ
    // לעשות טראנזישן על הסקרול של קרדיטס ושל מור ינפו
    // לכתוב ולעצב את אבאוט
    // במקרה של אררורז עם האיי פי איי, תחשוב מה לעשות
    // לתת רווח בין התמונות של הקבוצות והתחרויות לבין התחום שלהן


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
            <div className="home-top">
                <h1 className="line">RUGBY WORLD</h1>
                <h2>HERE YOU CAN FIND ALL COMPETITIONS, LATEST RESULTS AND UPCOMING MATCHES FROM ALL OVER THE WORLD</h2>
            </div>
            <div className="comps">
                <Competitions compChoice={compChoice}/>
            </div>
            <div className="last-results">
                {liveMatches.length ?
                <>
                    <h2>LIVE MATCHES</h2>
                    <Fixtures fixtureList={liveMatches} matchChoice={matchChoice} numberOfFixtures={liveMatches.length}/>
                </>
                :
                <></>
                }
                <h2>LATEST RESULTS</h2>
                <Fixtures fixtureList={results} matchChoice={matchChoice} numberOfFixtures={5}/>
                <h2>UPCOMING FIXTURES</h2>
                <Fixtures fixtureList={fixtureList} matchChoice={matchChoice} numberOfFixtures={5}/>
            </div>
        </div>
    )
}    