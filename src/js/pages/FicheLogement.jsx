import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import '../../css/FicheLogement.css';
import Carousel from '../components/Carousel';

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
    // retourner  la page Not found 404
  }

  return (
    <div className="fiche-logement">
      <Carousel images={logement.pictures} />
      <h1>{logement.title}</h1>
    </div>
  );
}

export default FicheLogement;
