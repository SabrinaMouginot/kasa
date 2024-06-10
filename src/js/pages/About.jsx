import React from 'react';
import '../../css/About.css';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

const About = () => {
  return (
    <div className='About'>
      <div className='banner-box'>
        <Banner />
      </div>

      {/* <div className="about">
        <Dropdown title="Fiabilité">
          <p>XXX</p>
          <p>XXX</p>
          <p>XXX</p>
        </Dropdown>
        <Dropdown title="Respect">
          <p>XXX</p>
          <p>XXX</p>
        </Dropdown>
        <Dropdown title="Service">
          <p>XXX</p>
          <p>XXX</p>
        </Dropdown>
        <Dropdown title="Sécurité">
          <p>XXX</p>
          <p>XXX</p>
        </Dropdown>
      </div>  */}

      <div className="about">
          <Dropdown title="Fiabilité" />
          <Dropdown title="Respect" />
          <Dropdown title="Service" />
          <Dropdown title="Sécurité" />
        </div>
    </div>
  );
};

export default About;
