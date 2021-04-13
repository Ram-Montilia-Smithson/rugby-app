import React, { useEffect, useState } from 'react'
import "../scss/main.css"
import Table from "../components/table";
import Fixtures from "../components/fixtures";
import premiership from "../images/premiership.png";



// copy from ultimate rugby, they use the exact same info
// responsiveness
// screen sizes
// intuitive


//  after reciving the competition's id that was sent from competitions.jsx
// call

// fetch("https://rugby-live-data.p.rapidapi.com/standings/{id}/2021", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
// 		"x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(data => {
// console.log(data)
// setStandings(data.results)
const DATA = {
    "comp_name": "prepiership",
    "standings": [
        {
            "tableName": "comp1",
            "teams": 
                [
                    {   
                        "position": 1,"id": 7167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                        "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                        "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
                    },
                    {
                        "position": 1,"id": 6167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                        "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                        "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
                    },
                    {
                        "position": 1,"id": 5167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                        "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                        "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
                    }
                    // ,
                ]
        },
        {
            "tableName": "comp2",
            "teams": 
                [
                    {   
                        "position": 1,"id": 7167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                        "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                        "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
                    },
                    {
                        "position": 1,"id": 6167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                        "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                        "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
                    },
                    {
                        "position": 1,"id": 5167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                        "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                        "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
                    }
                ]
        }
    ]
}
// setName(data.results.comp_name)
// setLogo(data.results.comp_id)
// consider make logo a different compenent
// .catch(err => {
// 	console.error(err);
// });



// also call fetch("https://rugby-live-data.p.rapidapi.com/fixtures/{id}/2021", {
// "method": "GET",
// "headers": {
// "x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
// "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
// }
// })
// .then(response => response.json())
// .then(data => {
// console.log(data)
const RESULTS = [
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780201,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780301,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780401,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
        ]
// setFixtureList(data.results)
// })
// .catch(err => {
// 	console.error(err);
// });



export default function Competition({ id, matchChoise }) {

    const [name, setName] = useState(DATA.comp_name)
    const [logo, setLogo] = useState(premiership)

    const [standings, setStandings] = useState(DATA.standings)
    const [fixtureList, setFixtureList] = useState(RESULTS)

    useEffect(() => {
        // insert first fetch here
        // insert second fetch here
        console.log(id)        
    }, [id])

    return (
        <div className="competition">
            <div className="competition-header">
                <img src={logo} alt={name}/>
                <h1>{name}</h1>
            </div>
            <Table standings={standings}/>
            <Fixtures fixtureList={fixtureList} matchChoise={matchChoise}/>
        </div>
    )
}
