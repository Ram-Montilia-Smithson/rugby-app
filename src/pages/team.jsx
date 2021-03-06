import React, { useEffect, useState } from 'react';
import Player from "../components/player";
import Fixtures from "../components/fixtures";

// consider to create the team from more than one match
// collect all players from the last ten matches and show each player as a card in a grid
// about 5-7 cards per row
// take info from mockData.js instead
// consider the coach card
// fix the tables of fixtures
// take ideas from other websites

const RESULTS = [
            {"away":"Glasgow Warr","away_score":22,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780201,"home":"Cheetahs","home_score":22,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":14,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780001,"home":"Cheetahs","home_score":48,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":8,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780101,"home":"Cheetahs","home_score":10,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":34,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780301,"home":"Cheetahs","home_score":25,"venue":"Toyota Stadium",
            },
            {"away":"Glasgow Warr","away_score":12,"date":"2019-09-27T17:05:00+00:00","game_week":1,
            "id":3780401,"home":"Cheetahs","home_score":15,"venue":"Toyota Stadium",
            },
        ]

const data = { 
            "results": {
                "match": {
                    "home_id":302
                },
                "home": {
                    "teamsheet": [
                        {
                            "name":"Mitch Hunt",
                            "player_id":133386,
                            "position":15,
                            "substitute":false
                        },
                        {
                            "name":"Josh McKay",
                            "player_id":149736,
                            "position":14,
                            "substitute":false
                        },
                        {
                            "name":"Michael Collins",
                            "player_id":120432,
                            "position":13,
                            "substitute":false
                        },
                        {
                            "name":"Sio Tomkinson",
                            "player_id":141906,
                            "position":12,
                            "substitute":false
                        },
                        {
                            "name":"Jona Nareki",
                            "player_id":165168,
                            "position":11,
                            "substitute":false
                        },
                        {
                            "name":"Josh Ioane",
                            "player_id":140352,
                            "position":10,
                            "substitute":false
                        },
                        {
                            "name":"Aaron Smith",
                            "player_id":69492,
                            "position":9,
                            "substitute":false
                        },
                        {
                            "name":"Ayden Johnstone",
                            "player_id":149652,
                            "position":1,
                            "substitute":false
                        },
                        {
                            "name":"Ash Dixon",
                            "player_id":63900,
                            "position":2,
                            "substitute":false
                        },
                        {
                            "name":"Siate Tokolahi",
                            "player_id":131700,
                            "position":3,
                            "substitute":false
                        },
                        {
                            "name":"Pari Parkinson",
                            "player_id":152016,
                            "position":4,
                            "substitute":false
                        },
                        {
                            "name":"Jack Whetton",
                            "player_id":120438,
                            "position":5,
                            "substitute":false
                        },
                        {
                            "name":"Shannon Frizell",
                            "player_id":157050,
                            "position":6,
                            "substitute":false
                        },
                        {
                            "name":"Dillon Hunt",
                            "player_id":144006,
                            "position":7,
                            "substitute":false
                        },
                        {
                            "name":"Marino Mikaele-Tu'u",
                            "player_id":149682,
                            "position":8,
                            "substitute":false
                        },
                        {
                            "name":"Liam Coltman",
                            "player_id":102852,
                            "position":16,
                            "substitute":true
                        },
                        {
                            "name":"Dan Lienert-Brown",
                            "player_id":125058,
                            "position":17,
                            "substitute":true
                        },
                        {
                            "name":"Jeff Thwaites",
                            "player_id":141582,
                            "position":18,
                            "substitute":true
                        },
                        {
                            "name":"Manaaki Selby-Rickit",
                            "player_id":173436,
                            "position":19,
                            "substitute":true
                        },
                        {
                            "name":"Teariki Ben-Nicholas",
                            "player_id":162096,
                            "position":20,
                            "substitute":true
                        },
                        {
                            "name":"Folau Fakatava",
                            "player_id":188592,
                            "position":21,
                            "substitute":true
                        },
                        {
                            "name":"Ngatungane Punivai",
                            "player_id":185064,
                            "position":22,
                            "substitute":true
                        },
                        {
                            "name":"Jesse Parete",
                            "player_id":134028,
                            "position":23,
                            "substitute":true
                        }
                    ]
                }
            }  
        }

export default function Team({team, comp_id, matchChoise}) {

    // const [pastFixturesList, setpastFixturesList] = useState(RESULTS)
    const pastFixturesList = RESULTS
    const [players, setPlayers] = useState([])
    let homeOrAway = "home"

    useEffect(() => {
        console.log(team)
        data.results[`${homeOrAway}`].teamsheet.forEach(player => {
            if (players.includes(player)) {
                return
            }
            console.log(player)
            setPlayers((players) => { return [...players, player] })
        })
    }, [team, players, homeOrAway])

    return (
        <div>
            <div className="team">
                <h1>teams page</h1>
                {players.length && 
                    players.map(player => {
                        return (
                            <Player className="team-players" name={player.name} number={player.position}/>
                        )
                    })
                }
                <Player className="team-coach" name={""} number={0}/>
            </div>
            {/* <div className="team-past-fixtures">
                <h1>Last Results</h1>
                <Fixtures fixtureList={pastFixturesList} matchChoise={matchChoise}/>
            </div>
            <div className="team-future-fixtures">
                <h1>Upcomming fixtures</h1>
                <Fixtures fixtureList={team.futureFixtures} matchChoise={matchChoise}/>
            </div> */}
        </div>
    )
}