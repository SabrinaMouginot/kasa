import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import '../../css/FicheLogement.css';
import Carousel from '../components/Carousel';
import NotFound from './NotFound';
import Tag from '../components/Tag';
import Dropdown from '../components/Dropdown';

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);
  const [rating, setRating] = useState(0);

  if (!logement) {
    // retourner  la page Not found 404
    return <NotFound />;
  }

  return (
    <div className="fiche-logement">
      <Carousel images={logement.pictures} />
      <div className="title-owner">
        <h1>{logement.title}</h1>
        <div className="owner-info">
          <span className="owner-name">{logement.host.name}</span>
          <img src={logement.host.picture} alt={logement.host.name} className="owner-picture" />
        </div>
      </div>

      <h2>{logement.location}</h2>

      {/* <div>
        {logement.tags.map(tag => (
          <span key={index} className="tag">{tag}</span>
        ))
        }
      </div> */}
      <div className="rating-tags">
        <div className="tags-list">
          {/* {logement.tags.map((tag, index) => (
          <Tag key={index} tag={tag} /> */}
          {logement.tags.map(tag => (
            <Tag key={`${logement.id}-${tag}`} tag={tag} />
          ))}
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? 'filled' : ''}`}
              onClick={() => setRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>

        {/* <div className="title-owner-mobile">
          <div className="owner-info-mobile">
            <span className="owner-name">{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} className="owner-picture" />
          </div>
        </div> */}

      </div>
      <div className="dropdowns">
        <Dropdown title="Description" content={logement.description} />
        <Dropdown title="Equipements" content={logement.equipments.join(', ')} />
      </div>
    </div>
  );
}

export default FicheLogement;
