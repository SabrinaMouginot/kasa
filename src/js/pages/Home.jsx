import React from 'react';
// import { Link } from 'react-router-dom';
// import logements from '../../data/logements.json';
import '../../css/Home.css';

function Home() {
  // const displayedLogements = logements.slice(0, 6); // Limite l'affichage à 6 cartes

return (
    <div className="home">
      <h1>Chez vous, partout et ailleurs</h1> {/* Titre en dehors de la boîte grise */}
      <div className="logements-box"> {/* Boîte grise contenant les cartes */}
        {/* <div className="logements-list">
          {logements.map(logement => (
            <div key={logement.id} className="logement-card">
              <Link to={`/logement/${logement.id}`}>
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
              </Link>
            </div>
          ))}
        </div> */}
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default Home;
