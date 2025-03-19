import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const images = [
  "/images/hero-image.jpg",
  "/images/pag-arq.png",
  "/images/pag-dep.png",
  "/images/pag-rodri.png"
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
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
          <a href="https://wa.me/523343451046" target="_blank" rel="noopener noreferrer">
            <button className="cta-button" title="Solicita tu cotización">
              Solicita tu cotización
            </button>
          </a>
        </div>
      </div>

      <div className="hero-card-container">
        <div className="hero-card">
          <div className="card-image">
            <img src={images[currentImage]} alt="Diseño web" />
          </div>
          <div className="card-text">
            <p>
              No solo creamos sitios web, construimos herramientas que potencian tu marca y ventas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
