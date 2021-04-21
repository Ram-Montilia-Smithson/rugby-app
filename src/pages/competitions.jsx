import premiership from "../utils/images/comps/premiership.png";
import pro14 from "../utils/images/comps/pro14.png"
import top14 from "../utils/images/comps/top14.png"
import RWC from "../utils/images/comps/RWC.png"
import sixNations from "../utils/images/comps/six nations.png"
import superugbyAO from "../utils/images/comps/super rugby AO.png"
import superugbyAU from "../utils/images/comps/super rugby AU.png"
import superugbyUL from "../utils/images/comps/super rugby UL.png"
import TRC from "../utils/images/comps/TRC.png"
import champions from "../utils/images/comps/champions.png"
import challenge from "../utils/images/comps/challenge.png"
import worldRugby from "../utils/images/comps/world rugby.png"
import topLeague from "../utils/images/comps/TopLeaguelogo.png"
import MLR from "../utils/images/comps/MLR.png"
import worldRugbyWomen from "../utils/images/comps/world rugby women.png"
import currie from "../utils/images/comps/currie.png"
import NPC from "../utils/images/comps/NPC.png"
import lions from "../utils/images/comps/lions.png"
import womenSixNations from "../utils/images/comps/women six nations.png"
import WRWC from "../utils/images/comps/WRWC.png"
import rugbyEurope from "../utils/images/comps/rugby europe.png"
import superugbyTT from "../utils/images/comps/super rugby TT.png"

import React, {useEffect, useState} from 'react'
import '../scss/main.css';
import { competitions } from "../utils/api/mockData"
import { Link } from 'react-router-dom';

// world rugby women, champions cup and TT needs fixing

export default function Competitions({ compChoice}) {

    const [items,setItems] = useState([])

    useEffect(() => {
        setItems(competitions().results)
    }, [])

    const handleClick = (id, logo) => {
        compChoice(id, logo)
    }

    return (
        <div className="competitions">
            <h1>here are all the best rugby competitions from all over the world</h1>
            <h1>choose one to see what new</h1>
            <div className="competitions-container">
                {items.map(item => {
                    if (item.name === "Gallagher Premiership") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, premiership)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={premiership} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "TOP 14") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, top14)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={top14} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Guinness PRO14") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, pro14)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={pro14} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Rugby World Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, RWC)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={RWC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Women's Rugby World Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, WRWC)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={WRWC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Major League Rugby") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, MLR)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={MLR} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Japan Top League") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, topLeague)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={topLeague} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Six Nations") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, sixNations)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={sixNations} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Women's Six Nations") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, womenSixNations)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={womenSixNations} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Super Rugby Aotearoa") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, superugbyAO)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyAO} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Super Rugby AU") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, superugbyAU)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyAU} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Super Rugby Unlocked") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, superugbyUL)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyUL} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Super Rugby Trans-Tasman") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, superugbyTT)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={superugbyTT} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "International") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, worldRugby)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={worldRugby} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Currie Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, currie)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={currie} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "European Rugby Challenge Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, challenge)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={challenge} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Heineken Champions Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, champions)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={champions} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Mitre 10 Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, NPC)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={NPC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Championship") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, TRC)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={TRC} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Women's Tour Match") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, worldRugbyWomen)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={worldRugbyWomen} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "British & Irish Lions") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, lions)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={lions} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Rugby Europe Championship") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id, rugbyEurope)}
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
