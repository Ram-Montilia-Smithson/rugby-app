import React, { useEffect, useState } from 'react'
import MatchInfoComponent from "./matchInfoComponent"
import "../scss/fixtures/fixtures.css"

//  search for ideas to improve layout and possibilities of fixtures 

export default function Fixtures({ fixtureList, matchChoice, numberOfFixtures }) {
    
    if (numberOfFixtures > 10) {numberOfFixtures = 10}
    const LIMIT = numberOfFixtures;
    const [fixtures, setFixtures] = useState([])
    const [isShowMoreFixtures,setIsShowMoreFixtures] = useState(true);
    const [fixtureIndex,setFixtureIndex] = useState(LIMIT);
    const [showMoreInfo, setShowMoreInfo] = useState([]);

    useEffect(() => {
        setFixtures(fixtureList.slice(0, LIMIT))
        // return () => {
        //     setFixtures([])
        // }
    }, [fixtureList, LIMIT])

    const loadFixtures = () =>{
        const newIndex = fixtureIndex + LIMIT;
        const newShowMore = newIndex <= (fixtureList.length);
        const newList = fixtures.concat(fixtureList.slice(fixtureIndex, newIndex));
        setFixtureIndex(newIndex);
        setFixtures(newList);
        setIsShowMoreFixtures(newShowMore);
    }

    const getDay = (date) => {
        const time = new Date(date)
        return `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`
    }

    const getTime = (date) => {
        const time = new Date(date)
        let minutes
        if (time.getMinutes() === 0) {minutes = "00"}
        else {minutes = time.getMinutes()}
        return  `${time.getHours()}:${minutes}`
    }

    const moreInfo = (id) => {
        if (!showMoreInfo.includes(id)) {setShowMoreInfo([...showMoreInfo,id])}
        if (showMoreInfo.includes(id)) { setShowMoreInfo(showMoreInfo.filter(id2 => id2 !== id)) }
    }

    return (
        <div className="fixtures">
            {fixtures &&
                <div>
                    {fixtures.map(fixture => {
                        return(
                            <div key={fixture.id} className="fixture-container">
                                <div className="fixture-head">
                                    <span className="fixture-game_week">ROUND {fixture.game_week}</span>
                                    {
                                        new Date(fixture.date).getTime() > new Date().getTime() ?
                                            <>
                                                <span className="fixture_date"></span>
                                                <span className="fixture-time"></span>
                                            </>
                                        :
                                            <>
                                                <span className="fixture_date">{getDay(fixture.date)}</span>
                                                <span className="fixture-time">{getTime(fixture.date)}</span>
                                            </>
                                    }
                                    <span className="fixture_venue">{fixture.venue}</span>
                                        <button 
                                            className="dropdown-button" 
                                            onClick={() => moreInfo(fixture.id)}
                                        >
                                            {!showMoreInfo.includes(fixture.id) ? "MORE INFO" : "LESS INFO"}
                                        </button>
                                </div>
                                <div className="fixture-bottom">
                                    <img src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${fixture.home_id}.png`} alt={fixture.home} />
                                    <span className="fixture_home">{fixture.home}</span>
                                    {
                                        new Date(fixture.date).getTime() < new Date().getTime() ?
                                        <>
                                            {fixture.home_score > fixture.away_score &&
                                                <span className="fixture-scores">
                                                    <span style={{ backgroundColor: "#202020", color: "white" }}>{fixture.home_score}</span>
                                                    <span>-</span>
                                                    <span style={{ backgroundColor: "#414141", color: "#808080" }}>{fixture.away_score}</span>
                                                </span>
                                            }
                                            {fixture.home_score < fixture.away_score &&
                                                <span className="fixture-scores">
                                                    <span className="fixture-score-home" style={{ backgroundColor: "#414141", color: "#808080" }}>{fixture.home_score}</span>
                                                    <span className="fixture-score-separator">-</span>
                                                    <span className="fixture-score-away" style={{ backgroundColor: "#202020", color: "white" }}>{fixture.away_score}</span>
                                                </span>
                                            }
                                            {fixture.home_score === fixture.away_score &&
                                                <span className="fixture-scores">
                                                    <span className="fixture-score-home" style={{ backgroundColor: "#808080", color: "black" }}>{fixture.home_score}</span>
                                                    <span>-</span>
                                                    <span className="fixture-score-away" style={{ backgroundColor: "#808080", color: "black" }}>{fixture.away_score}</span>
                                                </span>
                                            }
                                            </>
                                            :
                                            <span className="fixture-scores">
                                                <span className="fixture-score-home">{getDay(fixture.date)}</span>
                                                <span> </span>
                                                <span className="fixture-score-away">{getTime(fixture.date)}</span>
                                            </span>
                                    }
                                        
                                    <span className="fixture_away">{fixture.away}</span>
                                    <img src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${fixture.away_id}.png`} alt={fixture.away_id} />
                                </div>
                                <MatchInfoComponent
                                    id={fixture.id}
                                    matchChoice={matchChoice}
                                    showMoreInfo={showMoreInfo}
                                    link={true}
                                />
                            </div>
                        )
                    })}
                {numberOfFixtures !== 6 ? 
                    <></>
                    :
                    isShowMoreFixtures && <button onClick={() => loadFixtures()}>MORE FIXTURES</button>
                }
                </div>
            }
        </div>
    )
}
