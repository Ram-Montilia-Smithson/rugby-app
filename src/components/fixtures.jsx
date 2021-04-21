import React, { useEffect, useState, useRef } from 'react'
import MatchInfoComponent from "./matchInfoComponent"

// arrange the time date value in the fixtures
// fix the show more/show less with []
// scores colors

export default function Fixtures({ fixtureList, matchChoise }) {
    
    useEffect(() => {
        console.log(fixtureList)
    }, [fixtureList])

    const LIMIT = 5;    
    const [fixtures, setFixtures] = useState(fixtureList.slice(0, 5))
    const [showMoreFixtures,setShowMoreFixtures] = useState(true);
    const [fixtureIndex,setFixtureIndex] = useState(LIMIT);
    const [showMoreInfo, setShowMoreInfo] = useState(0)
    const showMoreButton = useRef("MORE INFO")

    const loadFixtures = () =>{
        const newIndex = fixtureIndex + LIMIT;
        const newShowMore = newIndex <= (fixtureList.length);
        const newList = fixtures.concat(fixtureList.slice(fixtureIndex, newIndex));
        setFixtureIndex(newIndex);
        setFixtures(newList);
        setShowMoreFixtures(newShowMore);
    }

    const moreInfo = (id) => {
        if (showMoreButton.current === "MORE INFO") {
            setShowMoreInfo(id)
            showMoreButton.current = "LESS INFO"
        }
        else{
            showMoreButton.current = "MORE INFO"
            setShowMoreInfo(0)
        }
    }

    return (
        <div className="fixtures">
            {fixtures &&
                <div>
                    {fixtures.map(fixture => {
                        console.log(fixture)
                        return(
                            <div key={fixture.id} className="fixture-container">
                                <div className="fixture-head">
                                    <span className="fixture-game_week">ROUND {fixture.game_week}</span>
                                    <span className="fixture_date">{fixture.date}</span>
                                    <span className="fixture-venue">{fixture.venue}</span>
                                    <div>
                                        <button 
                                            className="dropdown-button" 
                                            onClick={() => moreInfo(fixture.id)}
                                        >
                                            {showMoreButton.current}
                                        </button>
                                    </div>
                                </div>
                                <div className="fixture">
                                    {/* {fixture.home_score > fixture.away_score ? : } */}
                                    <span className="fixture_home">{fixture.home}</span>
                                    {fixture.home_score > fixture.away_score &&
                                        <span>
                                        <span className="fixture-score-home" style={{ backgroundColor: "#414141", color: "#ffffff" }}>{fixture.home_score}</span>
                                            -
                                        <span className="fixture-score-away" style={{ backgroundColor: "#c2c2c2"}}>{fixture.away_score}</span>
                                        </span>  
                                    }
                                    {fixture.home_score < fixture.away_score &&
                                        <span>
                                        <span className="fixture-score-home" style={{ backgroundColor: "#c2c2c2" }}>{fixture.home_score}</span>
                                            -
                                        <span className="fixture-score-away" style={{ backgroundColor: "#414141", color: "#ffffff" }}>{fixture.away_score}</span>
                                        </span>
                                    }
                                    {fixture.home_score === fixture.away_score &&
                                        <span>
                                        <span className="fixture-score-home" style={{ backgroundColor: "#3d3d3d", color: "#a3a3a3" }}>{fixture.home_score}</span>
                                            -
                                        <span className="fixture-score-away" style={{ backgroundColor: "#3d3d3d"}}>{fixture.away_score}</span>
                                        </span>
                                    }
                                    <span className="fixture-away">{fixture.away}</span>
                                </div>
                                <MatchInfoComponent
                                    id={fixture.id} 
                                    matchChoise={matchChoise}
                                    showMoreInfo={showMoreInfo}
                                />
                            </div>
                        )
                    })}
                    {showMoreFixtures && <button onClick={() => loadFixtures()}>MORE FIXTURES</button>}
                </div>
            }
        </div>
    )
}
