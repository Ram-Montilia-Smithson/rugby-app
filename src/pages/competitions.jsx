import React, {useEffect, useState} from 'react'
import '../scss/main.css';
import premiership from "../images/00_1_logo_premiership_rugby-999x562.jpg";
import Competition from "./competition"

// get the competitions for current season only
// show every competition as a button that is an image of the competition's logo
// this button would link you to its own page
// show all competition in a grid, about 5-7 in each row
// make them all big and easy to recognize

export default function Competitions() {

    const [items,setItems] = useState([])

    useEffect(() => {
        fetch("https://rugby-live-data.p.rapidapi.com/competitions", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
                "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setItems(data.results)
            })
            .catch(err => console.error(err));
        return () => {
            
        }
    }, [])

    return (
        <div>
            {items.map(item => {
                // on clicking on the button, the competition's id should be sent (maybe context) to the competition.jsx
                if (item.season >= 2021 && item.name === "Gallagher Premiership") return (
                    <a href="http://localhost:3000/">
                        <img className="premiership" src={premiership} alt="premiership" />
                    </a>
                )
                if (item.season >= 2021) return (<div key={item.id}>{JSON.stringify(item.name)}</div>) 
            })}
        </div>
    )
}
