import React, { useEffect, useState } from 'react'
import "../scss/main.css"
import { Link } from 'react-router-dom';
import premiership from "../images/premiership.png";


// "fixture.id" send info to match.jsx component that would open as a drop down from the fixture downwards
// add results as an option instead of fixtures
// add team's page link on every team in a table
// make team page
// copy from ultimate rugby, they use the exact same info
// responsiveness
// screen sizes
// intuitive
// download all teams's logos and show acordingly in table and fixtures
// show the competition's logo in middle top part of page quite big under the navbar
// loadMoreFixtures isnt working the best, sort it when you will start working with the actual API
// arange the time date value in the fixtures
// change color of score depends on other score
// adjust MORE INFO button to drop down more info
// within this more info, add a button that refers to matchInfo.jsx page


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
// if (data.results.standings.length > 1) {
// setMoreTeams(data.results.standings[1].teams)
// setTableName(data.results.standings[0].table_name)
// setTable2Name(data.results.standings[1].table_name)
// }
// setName(data.results.comp_name)
// setLogo(data.results.comp_id)
// setTeams(data.results.standings[0].teams)
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
// setFixtureList(data.results)
// })
// .catch(err => {
// 	console.error(err);
// });



export default function Competition({ id, matchChoise }) {

    const [name, setName] = useState("")
    const [logo, setLogo] = useState(premiership)
    
    // standings table
    const [tableName, setTableName] = ("comp")
    const [table2Name, setTable2Name] = ("comp2")
    const [teams, setTeams] = useState([])
    const [moreTeams, setMoreTeams] = useState([])
    
    // fixtures list
    const [fixtureList, setFixtureList] = useState([])
    const LIMIT = 2;    
    const [fixtures, setFixtures] = useState(fixtureList.slice(0, LIMIT))
    const [showMore,setShowMore] = useState(true);
    const [index,setIndex] = useState(LIMIT);

    const loadFixtures = () =>{
        const newIndex = index + LIMIT;
        const newShowMore = newIndex <= (fixtureList.length);
        const newList = fixtures.concat(fixtureList.slice(index, newIndex));
        setIndex(newIndex);
        setFixtures(newList);
        setShowMore(newShowMore);
    }

    useEffect(() => {
        // insert first fetch here
        // insert second fetch here
        console.log(id)
        setName(`competition ${id}`)
        setFixtureList([
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
        ])

        setTeams([
            {
                "position": 1,"id": 3167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
            },
            {
                "position": 1,"id": 3167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
            },
            {
                "position": 1,"id": 3167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
            }
        ])
        setMoreTeams([
            {
                "position": 1,"id": 3167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
            },
            {
                "position": 1,"id": 3167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
            },
            {
                "position": 1,"id": 3167,"name": "Bristol","played": 15,"won": 12,"drawn": 1,"lost": 2,
                "tries_for": 51,"tries_against": 28,"tries_diff": 23,"points_for": 398,"points_against": 270,
                "points_diff": 128,"try_bonus": 9,"losing_bonus": 2,"bye_bonus": 0,"points": 61
            }
        ])
    }, [id])

    const moreInfo = (id) => {
        matchChoise(id)
    }

    return (
        <div className="competition">
            <div className="competition-header">
                <img src={logo} alt={name}/>
                {/* <h1>{name}</h1> */}
            </div>
            <div className="tables">
                {teams.length &&
                    <div className="table-container">
                        {moreTeams.length ? <h2>comp 1 {tableName}</h2> : <></>}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>POS</th>
                                    <th>NAME</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>POINTS +/-</th>
                                    <th>POINTS DIFF</th>
                                    <th>TRIES +/-</th>
                                    <th>TRY BONUS</th>
                                    <th>LOOSING BONUS</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map(team => {
                                        console.log(fixtures)
                                        return(
                                            <tr key={team.id}>
                                                <td>{team.position}</td>
                                                <td>{team.name}</td>
                                                <td>{team.played}</td>
                                                <td>{team.won}</td>
                                                <td>{team.drawn}</td>
                                                <td>{team.lost}</td>
                                                <td>{team.points_for}/{team.points_against}</td>
                                                <td>{team.points_diff}</td>
                                                <td>{team.tries_for}/{team.tries_against}</td>
                                                <td>{team.try_bonus}</td>
                                                <td>{team.losing_bonus}</td>
                                                <td>{team.points}</td>
                                            </tr>
                                        )
                                })}
                            </tbody>
                        </table>
                    </div>
                }

                {moreTeams.length &&
                    <div className="table-container">
                        <h2>comp 2 {table2Name}</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>POS</th>
                                    <th>NAME</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>POINTS +/-</th>
                                    <th>POINTS DIFF</th>
                                    <th>TRIES +/-</th>
                                    <th>TRY BONUS</th>
                                    <th>LOOSING BONUS</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {moreTeams.map(team => {
                                    return (
                                        <tr key={team.id}>
                                            <td>{team.position}</td>
                                            <td>{team.name}</td>
                                            <td>{team.played}</td>
                                            <td>{team.won}</td>
                                            <td>{team.drawn}</td>
                                            <td>{team.lost}</td>
                                            <td>{team.points_for}/{team.points_against}</td>
                                            <td>{team.points_diff}</td>
                                            <td>{team.tries_for}/{team.tries_against}</td>
                                            <td>{team.try_bonus}</td>
                                            <td>{team.losing_bonus}</td>
                                            <td>{team.points}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                }
            </div>

            <div className="fixtures">
                {fixtures &&
                    <div>
                        <h2>FIXTURES</h2>
                        {fixtures.map(fixture => {
                                console.log(fixture)
                                return(
                                    <div key={fixture.id} className="fixture-container">
                                        <div className="fixture-head">
                                            {/* <span className="fixture-game_week">GAME WEEK No.{fixture.game_week}</span> */}
                                            <span className="fixture_date">{fixture.date} (time - date)</span>
                                            <span className="fixture-venue">{fixture.venue}</span>
                                            <Link
                                                onClick={() => moreInfo(fixture.id)}    
                                                className="fixture-link"
                                                to="/matchInfo"
                                            >
                                                MORE INFO
                                            </Link>
                                        </div>
                                        <div className="fixture">
                                        {/* {fixture.home_score > fixture.away_score ? : } */}
                                            <span className="fixture_away">{fixture.home}</span>
                                            <span className="fixture-score">{fixture.home_score} - {fixture.away_score}</span>
                                            <span className="fixture-home">{fixture.away}</span>
                                        </div>
                                    </div>
                                )
                        })}
                        {showMore && <button onClick={() => loadFixtures()}>MORE FIXTURES</button>}
                    </div>
                }
            </div>
        </div>
    )
}
