import React, {useEffect, useState} from 'react'
import '../scss/main.css';
import premiership from "../images/premiership.png";
import pro14 from "../images/pro14.png"
import top14 from "../images/top14.png"
import RWC from "../images/RWC.png"
import sixNations from "../images/six nations.png"
import superugbyAO from "../images/super rugby AO.png"
import superugbyAU from "../images/super rugby AU.png"
import superugbyUL from "../images/super rugby UL.png"
import TRC from "../images/TRC.png"
import champions from "../images/champions.png"
import challenge from "../images/challenge.png"
import worldRugby from "../images/world rugby.png"
import topLeague from "../images/TopLeaguelogo.png"
import MLR from "../images/MLR.png"
import worldRugbyWomen from "../images/world rugby women.png"
import currie from "../images/currie.png"
import NPC from "../images/NPC.png"
import lions from "../images/lions.png"
import womenSixNations from "../images/women six nations.png"
import WRWC from "../images/WRWC.png"
import rugbyEurope from "../images/rugby europe.png"
import superugbyTT from "../images/super rugby TT.png"
import autumn from "../images/autumn.png"
// import Competition from "./competition"
import { Link } from 'react-router-dom';

// get the competitions for current season only
// show every competition as a button that is an image of the competition's logo
// this button would link you to its own page
// show all competition in a grid, about 5-7 in each row
// make them all big and easy to recognize

export default function Competitions({ competitionChoice}) {

    const [items,setItems] = useState([])

    useEffect(() => {
        // fetch("https://rugby-live-data.p.rapidapi.com/competitions", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
        //         "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setItems(data.results)
        //     })
        //     .catch(err => console.error(err));
        // data.results.filter(result => {
        // result.season > 2020
        // }
        // setItems(data.results)
        // })
        setItems([
            { id: 1, season: 2022, name: "Gallagher Premiership" },
            { id: 2, season: 2022, name: "top14" },
            { id: 3, season: 2022, name: "pro14" },
            { id: 4, season: 2022, name: "RWC" },
            { id: 5, season: 2022, name: "WRWC" },
            { id: 6, season: 2022, name: "TRC" },
            { id: 7, season: 2022, name: "six nations" },
            { id: 8, season: 2022, name: "superugbyAO" },
            { id: 9, season: 2022, name: "superugbyAU" },
            { id: 10, season: 2022, name: "superugbyUL" },
            { id: 11, season: 2022, name: "mitre 10" },
            { id: 12, season: 2022, name: "currie" },
            { id: 13, season: 2022, name: "champions cup" },
            { id: 14, season: 2022, name: "challenge cup" },
            { id: 15, season: 2022, name: "world rugby" },
            { id: 16, season: 2022, name: "top league" },
            { id: 17, season: 2022, name: "MLR" },
            { id: 18, season: 2022, name: "World-rugby-women" },
            { id: 19, season: 2022, name: "lions" },
            { id: 20, season: 2022, name: "rugby europe" },
            { id: 21, season: 2022, name: "superugbyTT" },
            { id: 22, season: 2022, name: "autumn" }
        ])
        return () => {
            
        }
    }, [])

    const handleClick = (id) => {
        // when pressed on any competition's logo, take the competition's id and send it as a prop to <Competition id={THE ID}/>
        // consider <Link to="/competition's name"/> for every competition
        // console.log(id);
        competitionChoice(id)
    }

    return (
        <div className="competitions">
            <h1>here are all the best rugby competitions from all over the world</h1>
            <h1>choose one to see what new</h1>
            <div className="competitions-container">
                {items.map(item => {
                    // on clicking on the button, the competition's id should be sent (maybe context) to the competition.jsx
                    if (item.name === "Gallagher Premiership") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to="/competition"
                        >
                            <img className="competitions-image" src={premiership} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "top14") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={top14} alt={item.name} />
                        </a>
                    )
                    if (item.name === "pro14") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={pro14} alt={item.name} />
                        </a>
                    )
                    if (item.name === "RWC") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={RWC} alt={item.name} />
                        </a>
                    )
                    if (item.name === "WRWC") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={WRWC} alt={item.name} />
                        </a>
                    )
                    if (item.name === "MLR") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={MLR} alt={item.name} />
                        </a>
                    )
                    if (item.name === "top league") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={topLeague} alt={item.name} />
                        </a>
                    )
                    if (item.name === "six nations") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={sixNations} alt={item.name} />
                        </a>
                    )
                    if (item.name === "women six nations") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={womenSixNations} alt={item.name} />
                        </a>
                    )
                    if (item.name === "superugbyAO") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={superugbyAO} alt={item.name} />
                        </a>
                    )
                    if (item.name === "superugbyAU") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={superugbyAU} alt={item.name} />
                        </a>
                    )
                    if (item.name === "superugbyUL") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={superugbyUL} alt={item.name} />
                        </a>
                    )
                    if (item.name === "superugbyTT") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={superugbyTT} alt={item.name} />
                        </a>
                    )
                    if (item.name === "world rugby") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={worldRugby} alt={item.name} />
                        </a>
                    )
                    if (item.name === "autumn") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={autumn} alt={item.name} />
                        </a>
                    )
                    if (item.name === "currie") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={currie} alt={item.name} />
                        </a>
                    )
                    if (item.name === "challenge cup") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={challenge} alt={item.name} />
                        </a>
                    )
                    if (item.name === "champions cup") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={champions} alt={item.name} />
                        </a>
                    )
                    if (item.name === "mitre 10") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={NPC} alt={item.name} />
                        </a>
                    )
                    if (item.name === "TRC") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={TRC} alt={item.name} />
                        </a>
                    )
                    if (item.name === "World-rugby-women") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={worldRugbyWomen} alt={item.name} />
                        </a>
                    )
                    if (item.name === "lions") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={lions} alt={item.name} />
                        </a>
                    )
                    if (item.name === "rugby europe") return (
                        <a className="competitions-link" key={item.id} href="http://localhost:3000/">
                            <img className="competitions-image" src={rugbyEurope} alt={item.name} />
                        </a>
                    )
                    if (item.season >= 2021) return (<div key={item.id}>{JSON.stringify(item.name)}</div>)
                    return <div>for now, until the mapping of competitions will be completed</div>
                })}
            </div>
        </div>
    )
}
