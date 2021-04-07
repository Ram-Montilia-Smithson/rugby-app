import React, {useEffect, useState} from 'react'
import '../scss/main.css';
import premiership from "../images/premiership.png";
// import pro14 from "../images/pro14.jpg"
// import top14 from "../images/top14.png"
// import RWC from "../images/RWC.png"
// import sixNations from "../images/six nations.png"
// import superugbyAO from "../images/SRAO.jpg"
// import superugbyAU from "../images/SRAU.png"
// import superugbyUL from "../images/SRUL.png"
// import TRC from "../images/TRC.png"
// import champions from "../images/champions.jpg"
// import challenge from "../images/challenge.png"
// import worldRugby from "../images/world-rugby.jpg"
// import topLeague from "../images/TopLeaguelogo.png"
// import MLR from "../images/MLR.png"
// import women from "../images/world-rugby-women.png"
// import currie from "../images/currie.png"
// import NPC from "../images/NPC.jpg"
// import lions from "../images/B&I Lions.png"
// import womenSixNations from "../images/women six nations.jpg"
// import WRWC from "../images/WRWC.png"
// import rugbyEurope from "../images/rugby europe.png"
// import superugbyTT from "../images/superugby trans.png"
// import autumn from "../images/autumn.png"
// import Competition from "./competition"

// get the competitions for current season only
// show every competition as a button that is an image of the competition's logo
// this button would link you to its own page
// show all competition in a grid, about 5-7 in each row
// make them all big and easy to recognize

export default function Competitions() {

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
        setItems([{ id:1, season: 2022, name: "Gallagher Premiership" }, {id: 2, season: 2022, name: "Gallagher Premiership"}])
        return () => {
            
        }
    }, [])

    // const handleClick = () => {
    //     // when pressed on any competition's logo, take the competition's id and send it as a prop to <Competition id={THE ID}/>
    //     // consider <Link to="/competition's name"/> for every competition 
    // }

    return (
        <div>
            {items.map(item => {
                // on clicking on the button, the competition's id should be sent (maybe context) to the competition.jsx
                if (item.season >= 2021 && item.name === "Gallagher Premiership") return (
                    <a href="http://localhost:3000/">
                        <img className="premiership" src={premiership} alt="premiership" />
                    </a>
                )
                if (item.season >= 2021) return (<div key={item.id}>{JSON.stringify(item.name)}</div>)
                return <div>for now, until the mapping of competitions will be completed</div>
            })}
            <div className="footer">
                {/* <a href="http://localhost:3000/">
          <img className="premiership" src={premiership}
            alt="premiership" />
        </a> */}
                <a href="http://localhost:3000/">
                    <img className="rwc" src="./images/1200px-Rugby_World_Cup_2023_logo.svg.png"
                        alt="rwc" />
                </a>
                <a href="http://localhost:3000/">
                    <img className="SupeRugby" src="./images/1200px-SupeRugby_Logo.svg.png"
                        alt="SupeRugby" />
                </a>
                <a href="http://localhost:3000/">
                    <img className="SIX_NATIONS" src="./images/GUINNESS_SIX_NATIONS_LANDSCAPE_STACKED_RGB.png"
                        alt="SIX_NATIONS" />
                </a>
                <a href="http://localhost:3000/">
                    <img className="pro14" src="./images/pro14cat.jpg"
                        alt="pro14" />
                </a>
                <a href="http://localhost:3000/">
                    <img className="rugbypass" src="./images/RugbyPass-logo.png"
                        alt="rugby pass" />
                </a>
                <a href="http://localhost:3000/">
                    <img className="Top14" src="./images/Logo_Top14_2012.png"
                        alt="Top14" />
                </a>
            </div>
        </div>
    )
}
