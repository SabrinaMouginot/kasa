
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
        <img
          className={`dropdown-arrow ${isOpen ? 'open' : 'close'}`}
          src={`${process.env.PUBLIC_URL}/assets/arrow_back_ios-24px 2.svg`}
          alt="Dropdown Arrow"
        />
      </div>
      {/* {isOpen && <div className="dropdown-content"><p>{content}</p></div>} */}
      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
