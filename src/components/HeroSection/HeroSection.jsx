import React from 'react';
import './heroSection.css';
//HeroSection

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Parte izquierda: contenido animado */}
      <div className="hero-text">
        <div className="text-container">
          <h1 className="hero-title">
            Tu negocio,<br />
            tu web,<br />
            tu éxito.
          </h1>
          <p className="hero-subtitle">
          Webs optimizadas para el éxito de tu negocio.
          </p>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="cta-button"
              title="Descubre cómo podemos potenciar tu marca y aumentar tus ventas con una web a la medida"
            >
              Solicita tu cotización
            </button>
          </a>
        </div>
      </div>

      {/* Parte derecha: card con texto e imagen */}
      <div className="hero-card-container">
        <div className="hero-card">
          <div className="card-text">
            <p>
              No solo creamos sitios web, construimos herramientas que potencian tu marca y ventas.
            </p>
          </div>
          <div className="card-image">
            <img src="../images/hero-image.jpg" alt="Diseño web" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



