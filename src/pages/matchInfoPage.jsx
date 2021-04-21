import React, {useEffect, useState} from 'react';
import { Pie, defaults, Bar, Line, Doughnut } from 'react-chartjs-2/dist/index'

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
        console.log(defaults)
    }, [match])

    return (
        <div>
            <h1>match info</h1>
            <div style={{width: "400px", heigth: "400px", marginLeft: "200px"}}>


                <Bar
                    data={{
                        labels: [
                            'January', 'February', 'March', 'April', 'May'
                        ],
                        datasets: [
                            {
                                label: 'Rainfall',
                                backgroundColor: 'rgba(75,192,192,1)',
                                borderColor: 'rgba(0,0,0,1)',
                                borderWidth: 2,
                                data: [65, 59, 80, 81, 56],
                            }
                        ]
                    }}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text:'Average Rainfall per month',
                                fontSize:20
                            },
                            legend:{
                                display: true,
                                position:'right'
                            }
                        }
                    }}
                />



                <Line
                    data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [
                            {
                                label: "# of votes",
                                data: [1.1,1.2,1.3,1.1,1.2,1.1],
                                backgroundColor: "black",
                                borderColor: "white",
                                borderWidth: 1,
                                fill: {
                                    target: 'origin',
                                    above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                                },
                                lineTension: 0.3,
                            }
                        ],
                    }}
                    height={1}
                    width={1}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            title: {
                                display: true,
                                text:'Average Rainfall per month',
                                fontSize: "50px"
                            },
                            legend:{
                                display: true,
                                position:'right'
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                />
            </div>

        </div>
    )
}
