import React, { useEffect, useState } from 'react';
import '../../css/Home.css';
import Card from '../components/Card';
import Banner from '../components/Banner';

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Error fetching logements:', error));
  }, []);

  return (
    <div className="home">
      <div className="content-wrapper">
        <div className='banner-box'>
          <Banner />
          <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        </div>

        <div className="logements-box"> {/* Boîte grise contenant les cartes */}
          <article className="logements-list">
            {logements.map(logement => (
              <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default Home;