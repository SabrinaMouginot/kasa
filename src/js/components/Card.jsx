import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Card.css';

function Card({id,cover,title}) {
    return (

        <div className="logement-card">
            <Link to={`/logement/${id}`}>
                {/* <img src={cover} alt={title} />
                        <h2>{title}</h2> */}
                <div className="image-container">
                    <img src={cover} alt={title} />
                    <h2>{title}</h2>
                </div>
            </Link>
        </div>

    )
}

export default Card;