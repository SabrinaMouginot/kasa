import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import '../../css/FicheLogement.css';
import Carousel from '../components/Carousel';
import NotFound from './NotFound'; 

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
    </div>
  );
}

export default FicheLogement;
