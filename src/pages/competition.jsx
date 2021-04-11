import React, { useEffect, useState } from 'react'
import "../scss/main.css"

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
// setTeams(data.results.standings[0].teams)
// .catch(err => {
// 	console.error(err);
// });
// to show the info in a table
// show this table on the left side, make it almost the whole page's height
// also call fetch("https://rugby-live-data.p.rapidapi.com/fixtures/the id/2021", {
// "method": "GET",
// "headers": {
// "x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
// "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
// }
// })
// .then(response => response.json())
// .then(data => {
// console.log(data)
// })
// .catch(err => {
// 	console.error(err);
// });
// show this info in horizontal lines next to the table on the right
// make 1 line as an example
// relevant info for each fixture:
// "away":"Glasgow Warriors" right side
// "away_score":14 next to name
// "date":"2019-09-27T17:05:00+00:00" show in line above
// "game_week":1 arange fixtures based on that and "date"
// "id":3780106 to use when fixture is pressed - send info to match.jsx component that would open as a drop down from the fixture downwards
// "home":"Cheetahs" left side
// "home_score":48 next to name
// "venue":"Toyota Stadium" show in line above
// the top line in light blue like in the navbar and the body line in while/greyish white
// download all teams's logos and show acordingly in table and fixtures
// show the competition's logo in middle top part of page quite big under the navbar
// consider changing colours of background etc, based on the competition's logo colours.

export default function Competition({ id }) {
    
    const [name, setName] = useState("")
    const [tableName, setTableName] = ("")
    const [table2Name, setTable2Name] = ("")
    const [teams, setTeams] = useState([])
    const [moreTeams, setMoreTeams] = useState([])
    const [fixtures, setFixtures] = useState([])

    useEffect(() => {
        console.log(id)
        setName(`competition ${id}`)
        setFixtures([
            {"away":"Glasgow Warriors",
            // right side
            "away_score":14,
            // "next to name
            "date":"2019-09-27T17:05:00+00:00",
            // show in line above,
            "game_week":1,
            // arange fixtures based on that and "date",
            "id":3780106,
            //  to use when fixture is pressed - send info to match.jsx component that would open as a drop down from the fixture downwards,
            "home":"Cheetahs",
            //  left side,
            "home_score":48,
            // next to name
            "venue":"Toyota Stadium",
            // show in line above
            }
        ])
        setTeams(
            [{
                "position": 1,
                "id": 3167,
                "name": "Bristol",
                "played": 15,
                "won": 12,
                "drawn": 1,
                "lost": 2,
                "tries_for": 51,
                "tries_against": 28,
                "tries_diff": 23,
                "points_for": 398,
                "points_against": 270,
                "points_diff": 128,
                "try_bonus": 9,
                "losing_bonus": 2,
                "bye_bonus": 0,
                "points": 61
            },
            {
                "position": 2,
                "id": 269,
                "name": "Exeter",
                "played": 15,
                "won": 10,
                "drawn": 0,
                "lost": 5,
                "tries_for": 54,
                "tries_against": 28,
                "tries_diff": 26,
                "points_for": 366,
                "points_against": 261,
                "points_diff": 105,
                "try_bonus": 7,
                "losing_bonus": 2,
                "bye_bonus": 0,
                "points": 49
            },
            {
                "position": 3,
                "id": 4367,
                "name": "Sale",
                "played": 15,
                "won": 10,
                "drawn": 0,
                "lost": 5,
                "tries_for": 37,
                "tries_against": 26,
                "tries_diff": 11,
                "points_for": 341,
                "points_against": 273,
                "points_diff": 68,
                "try_bonus": 2,
                "losing_bonus": 4,
                "bye_bonus": 0,
                "points": 46
            },
            {
                "position": 4,
                "id": 3467,
                "name": "Harlequins",
                "played": 15,
                "won": 8,
                "drawn": 1,
                "lost": 6,
                "tries_for": 51,
                "tries_against": 46,
                "tries_diff": 5,
                "points_for": 441,
                "points_against": 332,
                "points_diff": 109,
                "try_bonus": 6,
                "losing_bonus": 3,
                "bye_bonus": 0,
                "points": 45
            },
            {
                "position": 5,
                "id": 4217,
                "name": "Northampton",
                "played": 15,
                "won": 8,
                "drawn": 0,
                "lost": 7,
                "tries_for": 38,
                "tries_against": 33,
                "tries_diff": 5,
                "points_for": 305,
                "points_against": 280,
                "points_diff": 25,
                "try_bonus": 4,
                "losing_bonus": 3,
                "bye_bonus": 0,
                "points": 41
            },
            {
                "position": 6,
                "id": 3917,
                "name": "London Irish",
                "played": 15,
                "won": 6,
                "drawn": 2,
                "lost": 7,
                "tries_for": 33,
                "tries_against": 37,
                "tries_diff": -4,
                "points_for": 289,
                "points_against": 310,
                "points_diff": -21,
                "try_bonus": 6,
                "losing_bonus": 2,
                "bye_bonus": 0,
                "points": 40
            }
        ])
        setMoreTeams([
            // {
            //     "position": 7,
            //     "id": 3767,
            //     "name": "Leicester",
            //     "played": 15,
            //     "won": 8,
            //     "drawn": 0,
            //     "lost": 7,
            //     "tries_for": 34,
            //     "tries_against": 39,
            //     "tries_diff": -5,
            //     "points_for": 316,
            //     "points_against": 319,
            //     "points_diff": -3,
            //     "try_bonus": 3,
            //     "losing_bonus": 0,
            //     "bye_bonus": 0,
            //     "points": 37
            // },
            // {
            //     "position": 8,
            //     "id": 3017,
            //     "name": "Bath",
            //     "played": 15,
            //     "won": 7,
            //     "drawn": 0,
            //     "lost": 8,
            //     "tries_for": 40,
            //     "tries_against": 56,
            //     "tries_diff": -16,
            //     "points_for": 341,
            //     "points_against": 413,
            //     "points_diff": -72,
            //     "try_bonus": 5,
            //     "losing_bonus": 3,
            //     "bye_bonus": 0,
            //     "points": 36
            // },
            // {
            //     "position": 9,
            //     "id": 4667,
            //     "name": "Wasps",
            //     "played": 15,
            //     "won": 6,
            //     "drawn": 0,
            //     "lost": 9,
            //     "tries_for": 39,
            //     "tries_against": 41,
            //     "tries_diff": -2,
            //     "points_for": 323,
            //     "points_against": 381,
            //     "points_diff": -58,
            //     "try_bonus": 3,
            //     "losing_bonus": 4,
            //     "bye_bonus": 0,
            //     "points": 31
            // },
            // {
            //     "position": 10,
            //     "id": 4067,
            //     "name": "Newcastle Falcons",
            //     "played": 15,
            //     "won": 6,
            //     "drawn": 0,
            //     "lost": 9,
            //     "tries_for": 28,
            //     "tries_against": 33,
            //     "tries_diff": -5,
            //     "points_for": 221,
            //     "points_against": 264,
            //     "points_diff": -43,
            //     "try_bonus": 0,
            //     "losing_bonus": 2,
            //     "bye_bonus": 0,
            //     "points": 30
            // },
            // {
            //     "position": 11,
            //     "id": 3317,
            //     "name": "Gloucester",
            //     "played": 15,
            //     "won": 4,
            //     "drawn": 0,
            //     "lost": 11,
            //     "tries_for": 39,
            //     "tries_against": 51,
            //     "tries_diff": -12,
            //     "points_for": 325,
            //     "points_against": 395,
            //     "points_diff": -70,
            //     "try_bonus": 3,
            //     "losing_bonus": 6,
            //     "bye_bonus": 0,
            //     "points": 25
            // },
            // {
            //     "position": 12,
            //     "id": 9917,
            //     "name": "Worcester",
            //     "played": 15,
            //     "won": 3,
            //     "drawn": 0,
            //     "lost": 12,
            //     "tries_for": 25,
            //     "tries_against": 51,
            //     "tries_diff": -26,
            //     "points_for": 208,
            //     "points_against": 376,
            //     "points_diff": -168,
            //     "try_bonus": 1,
            //     "losing_bonus": 5,
            //     "bye_bonus": 0,
            //     "points": 18
            // }
        ])
    }, [id])

    return (
        <div className="competition">
            <h1 className="competition-header">{name}</h1>
            <div className="tables">
                {teams.length ?
                    <div className="table-container">
                        {moreTeams.length ? <h2>comp 1 {tableName}</h2> : <></>}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th key="table-th-pos">POS</th>
                                    <th key="table-th-name">NAME</th>
                                    <th key="table-th-played">P</th>
                                    <th key="table-th-won">W</th>
                                    <th key="table-th-drawn">D</th>
                                    <th key="table-th-lost">L</th>
                                    <th key="table-th-tries_for">T.F</th>
                                    <th key="table-th-tries_against">T.A</th>
                                    <th key="table-th-tries_diff">T.DIFF</th>
                                    <th key="table-th-points_for">P.FOR</th>
                                    <th key="table-th-points_against">P.A</th>
                                    <th key="table-th-points_diff">P.DIFF</th>
                                    <th key="table-th-try_bonus">T-BONUS</th>
                                    <th key="table-th-losing_bonus">L-BONUS</th>
                                    <th key="table-th_points">POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map(team => {
                                        console.log(fixtures)
                                        return(
                                            <tr>
                                                <td key="table-td-position">{team.position}</td>
                                                <td key="table-td-name">{team.name}</td>
                                                <td key="table-td-played">{team.played}</td>
                                                <td key="table-td-won">{team.won}</td>
                                                <td key="table-td-drawn">{team.drawn}</td>
                                                <td key="table-td-lost">{team.lost}</td>
                                                <td key="table-td-tries_for">{team.tries_for}</td>
                                                <td key="table-td-tries_against">{team.tries_against}</td>
                                                <td key="table-td-tries_diff">{team.tries_diff}</td>
                                                <td key="table-td-points_for">{team.points_for}</td>
                                                <td key="table-td-points_against">{team.points_against}</td>
                                                <td key="table-td-points_diff">{team.points_diff}</td>
                                                <td key="table-td-try_bonus">{team.try_bonus}</td>
                                                <td key="table-td-losing_bonus">{team.losing_bonus}</td>
                                                <td key="table-td-points">{team.points}</td>
                                            </tr>
                                        )
                                })}
                            </tbody>
                        </table>
                    </div>
                : 
                    <h1>error</h1>
                }
                {moreTeams.length ? 
                    <div className="table-container">
                        <h2>comp 2 {table2Name}</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th key="table-th-pos">POS</th>
                                    <th key="table-th-name">NAME</th>
                                    <th key="table-th-played">P</th>
                                    <th key="table-th-won">W</th>
                                    <th key="table-th-drawn">D</th>
                                    <th key="table-th-lost">L</th>
                                    <th key="table-th-tries_for">T.F</th>
                                    <th key="table-th-tries_against">T.A</th>
                                    <th key="table-th-tries_diff">T.DIFF</th>
                                    <th key="table-th-points_for">P.FOR</th>
                                    <th key="table-th-points_against">P.A</th>
                                    <th key="table-th-points_diff">P.DIFF</th>
                                    <th key="table-th-try_bonus">T-BONUS</th>
                                    <th key="table-th-losing_bonus">L-BONUS</th>
                                    <th key="table-th_points">POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {moreTeams.map(team => {
                                    return (
                                        <tr>
                                            <td>{team.position}</td>
                                            <td>{team.name}</td>
                                            <td>{team.played}</td>
                                            <td>{team.won}</td>
                                            <td>{team.drawn}</td>
                                            <td>{team.lost}</td>
                                            <td>{team.tries_for}</td>
                                            <td>{team.tries_against}</td>
                                            <td>{team.tries_diff}</td>
                                            <td>{team.points_for}</td>
                                            <td>{team.points_against}</td>
                                            <td>{team.points_diff}</td>
                                            <td>{team.try_bonus}</td>
                                            <td>{team.losing_bonus}</td>
                                            <td>{team.points}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                :
                    <></>
                }
            </div>
            <div className="fixtures">
                {fixtures ?
                    <div className="fixture-container">
                    <table className="fixture">
                        {/* {tableName && <h1>{tableName}</h1>} */}
                            {/* <thead>
                                <tr>
                                    <th>away</th>
                                    <th>away_score</th>
                                    <th>date</th>
                                    <th>game_week</th>
                                    <th>id</th>
                                    <th>home</th>
                                    <th>home_score</th>
                                    <th>venue</th>
                                </tr>
                            </thead> */}
                            <tbody>
                            {fixtures.map(fixture => {
                                    console.log(fixture)
                                    return(
                                        <tr>
                                            <th>{fixture.date}</th>
                                            <td>{fixture.away}</td>
                                            <td>{fixture.away_score}</td>
                                            <td>{fixture.date}</td>
                                            <td>{fixture.game_week}</td>
                                            <td>{fixture.id}</td>
                                            <td>{fixture.home}</td>
                                            <td>{fixture.home_score}</td>
                                            <td>{fixture.venue}</td>
                                        </tr>
                                    )
                            })}
                            </tbody>
                        </table>
                    </div>
                : 
                    <h1>error - no fixtures</h1>
                }
            </div>
        </div>
    )
}
