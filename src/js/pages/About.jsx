import React from 'react';
import '../../css/About.css';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

const About = () => {
  return (
    <div className='About'>
      <div className="content-wrapper">
        <div className='banner-box'>
          <Banner />
        </div>

        <div className="about">
          <Dropdown title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
          <Dropdown title="Respect" content={"Le bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} />
          <Dropdown title="Service" content={"Le bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} />
          <Dropdown title="Sécurité" content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
        </div>
      </div>
    </div>
  );
};

export default About;
