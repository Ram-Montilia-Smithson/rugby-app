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
import { Link } from 'react-router-dom';

// once you use the actual API, adjust the names and Links so you
// would be able to send the logo to competition.jsx and show it there as well

export default function Competitions({ compChoice}) {

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
        //         data.results.filter(result => {
        //            result.season > 2020
        //         }
        //         setItems(data.results)
        //     })
        //     .catch(err => console.error(err));
        // })
        setItems([
            { id: 1, season: 2022, name: "Gallagher-Premiership" },
            { id: 2, season: 2022, name: "top14" },
            { id: 3, season: 2022, name: "pro14" },
            { id: 4, season: 2022, name: "RWC" },
            { id: 5, season: 2022, name: "WRWC" },
            { id: 6, season: 2022, name: "TRC" },
            { id: 7, season: 2022, name: "six-nations" },
            { id: 8, season: 2022, name: "superugbyAO" },
            { id: 9, season: 2022, name: "superugbyAU" },
            { id: 10, season: 2022, name: "superugbyUL" },
            { id: 11, season: 2022, name: "mitre-10" },
            { id: 12, season: 2022, name: "currie" },
            { id: 13, season: 2022, name: "champions-cup" },
            { id: 14, season: 2022, name: "challenge-cup" },
            { id: 15, season: 2022, name: "world-rugby" },
            { id: 16, season: 2022, name: "top-league" },
            { id: 17, season: 2022, name: "MLR" },
            { id: 18, season: 2022, name: "World-rugby-women" },
            { id: 19, season: 2022, name: "lions" },
            { id: 20, season: 2022, name: "rugby-europe" },
            { id: 21, season: 2022, name: "superugbyTT" },
            { id: 22, season: 2022, name: "autumn" },
            { id: 23, season: 2022, name: "women-six-nations"}
        ])
        return () => {
            
        }
    }, [])

    const handleClick = (id) => {
        compChoice(id)
    }

    return (
        <div className="competitions">
            <h1>here are all the best rugby competitions from all over the world</h1>
            <h1>choose one to see what new</h1>
            <div className="competitions-container">
                {items.map(item => {
                    if (item.name === "Gallagher-Premiership") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={premiership} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "top14") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={top14} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "pro14") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={pro14} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "RWC") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={RWC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "WRWC") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={WRWC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "MLR") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={MLR} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "top-league") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={topLeague} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "six-nations") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={sixNations} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "women-six-nations") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={womenSixNations} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "superugbyAO") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyAO} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "superugbyAU") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyAU} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "superugbyUL") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyUL} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "superugbyTT") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyTT} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "world-rugby") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={worldRugby} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "autumn") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={autumn} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "currie") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={currie} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "challenge-cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={challenge} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "champions-cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={champions} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "mitre-10") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={NPC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "TRC") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={TRC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "World-rugby-women") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={worldRugbyWomen} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "lions") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={lions} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "rugby-europe") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={rugbyEurope} alt={item.name} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
