import React from 'react';
import { MdWeb, MdDevices } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import './businessFutureSection.css';

const BusinessFutureSection = () => {
  return (
    <section id='negocio' className="bf-section">
      <div className="bf-header">
        <h1 className="bf-title">TU NEGOCIO, TU FUTURO</h1>
        <p className="bf-subtitle">Convierte tu visión en una realidad digital.</p>
      </div>
      <div className="bf-cards-container">
        {/* Card 1 */}
        <div className="bf-card bf-card-black">
          <div className="bf-card-icon">
            <MdWeb style={{ color: "#00a174", fontSize: "60px" }} />
          </div>
          <h2 className="bf-card-title">El sitio web que tu marca merece</h2>
          <p className="bf-card-info">
            Tu marca es única y merece lo mejor. Te entregamos un sitio web de calidad que refleje su verdadero valor.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bf-card bf-card-black">
          <div className="bf-card-icon">
            <FaUsers style={{ color: "#00a174", fontSize: "60px" }} />
          </div>
          <h2 className="bf-card-title">Un equipo creativo a tu medida</h2>
          <p className="bf-card-info">
            Un equipo “todo en uno”, dedicado exclusivamente a tu marca. Como si fuera parte de tu empresa.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bf-card bf-card-white">
          <div className="bf-card-icon">
            <MdDevices style={{ color: "#00a174", fontSize: "60px" }} />
          </div>
          <h2 className="bf-card-title">Experiencias digitales, no solo sitios web</h2>
          <p className="bf-card-info">
            No solo diseñamos páginas, creamos experiencias digitales que conectan con tu audiencia y potencian tu marca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessFutureSection;
