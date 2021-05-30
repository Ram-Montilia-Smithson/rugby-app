import React, { useEffect, useState } from 'react'
import '../scss/home/home.css';
import { competitions } from "../utils/api/mockData"
// import { competitions } from "../utils/api/api"
import { Link } from 'react-router-dom';

// think what to put in the hover

export default function Competitions({ compChoice}) {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(competitions().results)
        console.log(items);
        // return () => {setItems([])}
    }, [])

    return (
            <div className="competitions-container">
                {items.map(item => {
                    return (
                        <div className="competitions-link">
                            <Link
                            key={item.id}
                            onClick={() => compChoice(item)}
                            to={`/competition?${item.name}`}
                            >
                                <img className="competitions-image" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${item.id}.png`} alt={item.name} />
                            </Link>
                            <div className="hover">
                                {/* <Table standings={tables} teamChoice={teamChoice} fixtures={fixtureList} /> */}
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}
