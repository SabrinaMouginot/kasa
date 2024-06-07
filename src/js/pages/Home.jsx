import React from 'react';
import '../../css/Home.css';
import Card from '../components/Card';
import Banner from '../components/Banner';

function Home() {

  return (
    <div className="home">
      <div className="content-wrapper">
        <div className='banner-box'>
          <Banner />
        </div>

        <div className="logements-box"> {/* Boîte grise contenant les cartes */}
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
