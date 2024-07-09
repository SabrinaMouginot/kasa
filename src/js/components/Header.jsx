// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../../css/Header.css'; 

// function Header() {
//   return (
//     <header className="header">
//       {/* <img src={logo} alt="Logo" className="logo" /> */}
//       <img src={`/assets/LOGOHEADER.png`} alt="Kasa Logo" className="header-logo" />
//       <nav>
//         <ul className="nav-list">
//           <li className="nav-item">
//             <NavLink to="/" activeClassName="active-link" exact>Accueil</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/about" activeClassName="active-link">À propos</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Header.css'; 

function Header() {
  return (
    <header className="header">
      <img src={`/assets/LOGOHEADER.png`} alt="Kasa Logo" className="header-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
