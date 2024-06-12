import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import '../../css/FicheLogement.css';
import Carousel from '../components/Carousel';
import NotFound from './NotFound';
import Tag from '../components/Tag';

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    // retourner  la page Not found 404
    return <NotFound />;
  }

  return (
    <div className="fiche-logement">
      <Carousel images={logement.pictures} />
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>
      {/* <div>
        {logement.tags.map(tag => (
          <span key={index} className="tag">{tag}</span>
        ))
        }
      </div> */}
      <div className="tags-list">
        {/* {logement.tags.map((tag, index) => (
          <Tag key={index} tag={tag} /> */}
          {logement.tags.map(tag => (
            <Tag key={`${logement.id}-${tag}`} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default FicheLogement;
