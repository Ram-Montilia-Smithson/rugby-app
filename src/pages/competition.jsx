import React, { useEffect, useState } from 'react'
import "../scss/main.css"
import Table from "../components/table";
import Fixtures from "../components/fixtures";
import { standings, fixtures } from "../utils/api/mockData";

// consider making competitionHeader.jsx component to show logo with comp_name in a nicer way and
// consider showing all logos of teams in a horizontal line, fetched by  `https://rugby-live-data.p.rapidapi.com/teams/${id}/2021`
// these logos will also connect you to team's page
// consider cases of no data and errors
// add future matches
// consider make logo a different component

export default function Competition({ id, logo, matchChoice, teamChoice }) {

    const [name, setName] = useState("")
    // const [logo, setLogo] = useState(premiership)

    const [table, setTable] = useState([])
    const [fixtureList, setFixtureList] = useState([])

    useEffect(() => {
        // console.log(fixtures().results)
        setName(standings(id).results.comp_name)
        // setLogo(standings().results.comp_id)
        setTable(standings(id).results.standings)
        setFixtureList(fixtures(id).results)
    }, [id])

    return (
        <div className="competition" >
            <div className="competition-header">
                <img src={logo} alt={name}/>
                {/* <div>{name}</div> */}
            </div>
            {table.length && 
                <Table standings={table} teamChoice={teamChoice} futureFixtures={fixtureList} comp={name}/>
            }
            <div>
                <h2>Last Results</h2>
                <Fixtures fixtureList={fixtureList} matchChoice={matchChoice}/>
            </div>
        </div>
    )
}