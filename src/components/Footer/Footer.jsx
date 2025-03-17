import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="ft-footer">
      <div className="ft-main">
        <div className="ft-left">
          <img src="../images/logo-fondo.png" alt="Logo" className="ft-logo" />
        </div>
        <div className="ft-divider"></div>
        <div className="ft-right">
          <a href="https://www.instagram.com/tu_cuenta" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="ft-instagram" />
          </a>
        </div>
      </div>
      <div className="ft-copy">
        <p>
          Copyright © 2025 | Todos los derechos reservados por Codara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
