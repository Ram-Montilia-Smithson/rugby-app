import React from 'react'
import "../scss/main/main.css"

// explain about yourself and your project
// mention the web dev aspects
// charts.js, front end project, create react hooks, changing theme based on team/comp, small CV, links to other projects 
// you have copied examples of about pages in prtSc

export default function About() {
    return (
        <div>
            <h1>about</h1>
            <p>
                in this website you will find all the most recent information from all the professional rugby competitions from all over the world
                as provided by the "live rugby data" API.<br/>
                all the matches, all the results, all the stats, right here in ONE place
            </p>
            <p>
                my name is Ram Montilia Smithson and I'm a junior web developer and as you can see here, a big rugby fan
            </p>
            <p>
                in this website I'm showing my skills as a web developer
                using React.js with scss.
                (look for how to write an about page)
            </p>
            {/* <p>
                after graduating from ITC's full stack bootcamp, in which I learned:
                HTML, CSS and JS
                React.js, node.js, mongoDB (and mongoos)
                firebase, heroku, (copy from ITC's CV) 
            </p> */}
            {/* <p>
                I'm a smart enthusiantic guy looking for my first position as a web developper
                (skills and charituristics)
            </p> */}
            <p>
                for contact information press here (add alink to footer)
            </p>
        </div>
    )
}
