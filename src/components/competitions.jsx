import React, { useEffect, useState } from 'react'
import '../scss/home/home.css';
import { competitions } from "../utils/api/mockData"
// import { competitions } from "../utils/api/api"
import { Link } from 'react-router-dom';

export default function Competitions({ compChoice}) {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(competitions().results)
        // return () => {setItems([])}
    }, [])

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
                            <img className="competitions-image" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${item.id}.png`} alt={item.name} />
                        </Link>
                    )
                })}
            </div>
    )
}
