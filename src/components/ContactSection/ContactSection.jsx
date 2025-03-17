import React from 'react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import './contactSection.css';

const ContactSection = () => {
  return (
    <section id='contacto' className="cs-section">
      {/* Lado izquierdo: fondo con imagen y textos */}
      <div className="cs-left">
        <div className="cs-left-bg"></div>
        <div className="cs-left-content">
          <h1 className="cs-main-title">
            Tu éxito comienza con un clic. Escríbenos ahora.
          </h1>
          <p className="cs-subtitle">
            En menos de 30 minutos tendrás una respuesta y en menos de 24 horas, tu cotización.
          </p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <button className="cs-cta">Quiero cotizar</button>
          </a>
        </div>
      </div>
      {/* Lado derecho: logo y datos de contacto */}
      <div className="cs-right">
        <div className="cs-logo">
          <img src="../images/logo-fondo.png" alt="Logo Marketing Lab" />
        </div>
        <div className="cs-contact-info">
          <div className="cs-contact-item">
            <MdPhone className="cs-icon" />
            <div className="cs-contact-text">
              <h4>Teléfono</h4>
              <p>55 40 04 45 08</p>
            </div>
          </div>
          <div className="cs-contact-item">
            <MdEmail className="cs-icon" />
            <div className="cs-contact-text">
              <h4>Cotizaciones</h4>
              <p>ventas@marketinglab.mx</p>
            </div>
          </div>
          <div className="cs-contact-item">
            <MdLocationOn className="cs-icon" />
            <div className="cs-contact-text">
              <h4>Ubicación</h4>
              <p>Jalisco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
