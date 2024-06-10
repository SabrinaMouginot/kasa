// import React, { useState } from 'react';
// import '../../css/Dropdown.css';

// function Dropdown({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`dropdown ${isOpen ? 'open' : ''}`}>
//       <div className="dropdown-header" onClick={toggleDropdown}>
//         <span className="dropdown-title">{title}</span>
//         <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
//       </div>
//       {isOpen && <div className="dropdown-content">{children}</div>}
//     </div>
//   );
// }

// export default Dropdown;

// src/js/components/Dropdown.js
import React, { useState } from 'react';
import '../../css/Dropdown.css';

function Dropdown({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const contents = {
    "Fiabilité": "XXX",
    "Respect": "XXX",
    "Service": "XXX",
    "Sécurité": "XXX"
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="dropdown-content"><p>{contents[title]}</p></div>}
    </div>
  );
}

export default Dropdown;
