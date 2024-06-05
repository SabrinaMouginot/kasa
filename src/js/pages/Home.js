import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../data/logements.json';
import '../../css/Home.css';

// // const Home = () => {
// //   return (
// //     <div>
// //       <h1>Welcome to Kasa</h1>
// //       <p>This is the Home page.</p>
// //     </div>
// //   );
// // };

function Home() {
  const displayedLogements = logements.slice(0, 6); // Limite l'affichage à 6 cartes

  return (
    <div className="home">
      <h1>Liste des logements</h1>
      <div className="logements-list">
        {displayedLogements.map(logement => (
          <div key={logement.id} className="logement-card">
            <Link to={`/logement/${logement.id}`}>
              <img src={logement.cover} alt={logement.title} />
              <h2>{logement.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
