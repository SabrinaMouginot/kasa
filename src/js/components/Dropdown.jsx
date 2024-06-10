import React, { useState } from 'react';
import '../../css/Dropdown.css';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="dropdown-content"><p>{content}</p></div>}
    </div>
  );
}

export default Dropdown;
