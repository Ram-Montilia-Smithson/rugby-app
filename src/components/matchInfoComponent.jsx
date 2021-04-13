import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';


// after reciving the match's id from competition.jsx
// call fetch("https://rugby-live-data.p.rapidapi.com/match/the id", {
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
// show basic info of the match like possesion, teritory, and info from "match" and "referees"
// include a "show more info" button that would send the match's id to matchInfo.jsx and open it

export default function MatchInfoComponent({id, matchChoise, showMoreInfo}) {

    useEffect(() => {
        console.log(id, showMoreInfo)
    }, [id, showMoreInfo])

    return (
        <>
            {id === showMoreInfo ?
                <div>

                    <Link
                        onClick={() => matchChoise(id)}    
                        className="fixture-link"
                        to="/matchInfo"
                    >
                        COMPLETE MATCH INFO
                    </Link>    
                </div>
            :
            <></>
            }
        </>
    )
}
