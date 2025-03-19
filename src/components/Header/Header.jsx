import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="../images/logo-fondo.png" alt="Logo" className="logo" />
        <nav className="menu">
          <a href="#servicios" className="menu-item">Servicios</a>
          <a href="#Negocio" className="menu-item">Negocio</a>
          <a href="#contacto" className="menu-item">Contacto</a>
        </nav>
      </div>
      <div className="header-right">
        <a href="https://wa.me/523343451046" target="_blank" rel="noopener noreferrer" className="contact-link">
          <button className="contact-button">
            <FaWhatsapp className="whatsapp-icon" />&nbsp;Contáctanos
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
