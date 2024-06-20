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
          <Dropdown title="Fiabilité" content="Bonjour" />
          <Dropdown title="Respect" content={"Hello"} />
          <Dropdown title="Service" content={"Goodbye"} />
          <Dropdown title="Sécurité" content={"Ciao"} />
        </div>
      </div>
    </div>
  );
};

export default About;
