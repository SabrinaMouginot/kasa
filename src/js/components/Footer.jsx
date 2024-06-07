import React from 'react';
import '../../css/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <img src={`/assets/LOGO.png`} alt="Kasa Logo" className="footer-logo" />
      <p>© 2020 Kasa. All right reserved</p>
    </footer>
  );
}

export default Footer;
