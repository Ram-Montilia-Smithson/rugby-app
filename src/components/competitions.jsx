import React, {useEffect, useState} from 'react'
import '../scss/home/home.css';
import { competitions } from "../utils/api/mockData"
import { Link } from 'react-router-dom';

export default function Competitions({ compChoice}) {

    const [items,setItems] = useState([])

    useEffect(() => {
        setItems(competitions().results)
        return () => {setItems([])}
    }, [])

    // const handleClick = (id) => {compChoice(id)}

    return (
            <div className="competitions-container">
                {items.map(item => {
                    return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => compChoice(item)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                })}
            </div>
    )
}
