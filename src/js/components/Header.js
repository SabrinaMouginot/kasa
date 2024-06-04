import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;