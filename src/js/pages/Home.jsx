import React from 'react';
import '../../css/Home.css';
import Card from '../components/Card';
import Banner from '../components/Banner';
import logements from '../../data/logements.json';

function Home() {

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
