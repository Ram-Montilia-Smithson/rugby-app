import React, {useEffect, useState} from 'react'
import {} from 'react-chartjs-2';
 
// transfer all fetches to utils api
// here, after reciving the match's id from match.jsx
// call fetch("https://rugby-live-data.p.rapidapi.com/match/3195835", {
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
// and show all relevant info about the match, there is so much of it
// be creative as you go over the info and think how should you show it.
// charts.js
// copy from ultimate rugby

export default function MatchInfoPage({match}) {

    useEffect(() => {
        console.log(match);
    }, [match])

    return (
        <div>
            <h1>match info</h1>
            <Bar/>

        </div>
    )
}
