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
  }

  return (
    <div className="fiche-logement">
        <Carousel images={logement.pictures} />
      {/* <div className="carousel">
        {logement.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Slide ${index}`} /> */}
        {/* ))} */}
      {/* </div> */}
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Ajoutez d'autres détails du logement ici */}
    </div>
  );
}

export default FicheLogement;
