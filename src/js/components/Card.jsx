import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../data/logements.json';

function Card () {
    return (
        <article className="logements-list">
            {logements.map(logement => (
                <div key={logement.id} className="logement-card">
                    <Link to={`/logement/${logement.id}`}>
                        <img src={logement.cover} alt={logement.title} />
                        <h2>{logement.title}</h2>
                    </Link>
                </div>
            ))}
        </article>
    )
}

export default Card;