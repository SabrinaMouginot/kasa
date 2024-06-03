import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; 

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;