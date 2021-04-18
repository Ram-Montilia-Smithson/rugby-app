import React, { useEffect, useState, useRef } from 'react'

// future fixtures using fixtures.jsx
// all past results of fixtures using fixtures.jsx
// link to actuall team's website
// use "https://rugby-live-data.p.rapidapi.com/fixtures-by-team/TEAM'S-ID"
// in the results array, use the id's of ten fixtures to fetch ten times the 
// "https://rugby-live-data.p.rapidapi.com/match/FIXTURE-ID"
// in results.match.home_team / results.match.away_team you will find your team's name (can be done with ids as well)
// then in results.home.teamsheet /results.away.teamsheet, you will find an array of the team's players
// collect all players from the last ten matches and show each player as a card in a grid
// about 5-7 cards per row
// the player card should contain name, position/s, place for picture

const data = { 
            "results": {
                "match": {
                    "away_id":302
                },
                "away": {
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

export default function Team({team}) {

    const [players, setPlayers] = useState([])
    const fixturesList = [3780106, 3780205, 3780331, 3780403, 3780466]

    // useEffect(() => {
        // console.log(team);
    // }, [team])
    const getPlayers = async () => {

        // await fetch(`https://rugby-live-data.p.rapidapi.com/fixtures/${team.compId}/2021`, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "d572e6ed0fmsh868629b7063cd7bp1c431cjsnd4f196e6cfe5",
        //         "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // console.log("data",data);
        //     while (fixturesList.length <= 10) {
        //         data.results.forEach(result => {
        //             if (result.away_id === team.teamId || result.home_id === team.teamId) {
        //                 fixturesList.push(result.id)
        //             }
        //         })
        //     }
        // })
        // .catch(err => {
        //     console.error(err);
        // });

        // console.log(fixturesList);

        // fixturesList.forEach(fixture => {
        //     fetch(`https://rugby-live-data.p.rapidapi.com/match/${fixture}`, {
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-key": "d572e6ed0fmsh868629b7063cd7bp1c431cjsnd4f196e6cfe5",
        //             "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        
                console.log("data",data);
                let homeOrAway = "home"
                if (data.results.match.home_id === team.teamId) {
                    homeOrAway = "home"
                }
                if (data.results.match.away_id === team.teamId) {
                    homeOrAway = "away"
                }
                console.log("homeOrAway",homeOrAway);
                console.log(data.results[`${homeOrAway}`].teamsheet);
                for (let i = 0; i < data.results[`${homeOrAway}`].teamsheet.length; i++) {
                    for (let j = 0; j < players.length; j++) {
                        if (data.results[`${homeOrAway}`].teamsheet[i].player_id === players[j].player_id) {
                            return
                        }
                        else if (data.results[`${homeOrAway}`].teamsheet[i].player_id !== players[j].player_id) {
                            setPlayers([...players, data.results[`${homeOrAway}`].teamsheet[i]])
                        }
                    }

                }
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    //     })
    }

    getPlayers()

    return (
        <div>
            {players.length && console.log(players)}
            {/* {players && getPlayers()} */}
            <h1>teams page</h1>
        </div>
    )
}
