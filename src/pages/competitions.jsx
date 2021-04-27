import React, {useEffect, useState} from 'react'
import '../scss/main.css';
import { competitions } from "../utils/api/mockData"
import { Link } from 'react-router-dom';

// autumn, friendlies and tri nations
// fix explanation
// think of more ideas

export default function Competitions({ compChoice}) {

    const [items,setItems] = useState([])

    useEffect(() => {
        setItems(competitions().results)
    }, [])

    const handleClick = (id) => {
        compChoice(id)
    }

    return (
        <div className="competitions">
            <h1>here are all the best rugby competitions from all over the world</h1>
            <h1>choose one to see what new</h1>
            <div className="competitions-container">
                {items.map(item => {
                    return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
