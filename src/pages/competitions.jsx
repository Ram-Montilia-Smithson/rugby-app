import React, {useEffect, useState} from 'react'
import '../scss/main.css';
import { competitions } from "../utils/api/mockData"
import { Link } from 'react-router-dom';

// world rugby women, champions cup and TT needs fixing
// delete SR UL
// consider rainbow cup
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
                    if (item.name === "Gallagher Premiership") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "TOP 14") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Guinness PRO14") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Rugby World Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Women's Rugby World Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Major League Rugby") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Japan Top League") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Six Nations") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Women's Six Nations") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Super Rugby Aotearoa") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Super Rugby AU") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Super Rugby Trans-Tasman") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "International") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Currie Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "European Rugby Challenge Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Heineken Champions Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Mitre 10 Cup") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Championship") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Women's Tour Match") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "British & Irish Lions") return (
                        <Link
                            className="competitions-link"
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            to={`/competition?${item.name}`}
                        >
                            <img className="competitions-image" src={`${process.env.PUBLIC_URL}/images/comps/${item.name}.png`} alt={item.name} />
                        </Link>
                    )
                    if (item.name === "Rugby Europe Championship") return (
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
