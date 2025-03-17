import React, { useState, useEffect, useRef } from 'react';
import './FeaturesSection.css';

const features = [
  {
    package: "Paquete PRIME",
    description: "⭐ Ideal para pequeños negocios o emprendedores que inician",
    details: [
      "✅ 3 Secciones",
      "✅ Diseño responsivo.",
      "✅ Formulario y maps.",
      "✅ Certificado SSL.",
      "❌ Optimización SEO.",
      "✅ Dominio y hosting 1 año.",
      "❌ Integración con APIs externas.",
      "❌ Mantenimiento incluido.",
      "❌ Sistema de gestión de contenido (CMS).",
      "❌ Funcionalidades adicionales a medida.",
      "📆 Tiempo de entrega: 1 a 2 Semanas"
      
    ],
    note: "📌 Perfecto para quienes buscan una presencia web sencilla pero efectiva.",
    buttonText: "Contratar PRIME",
    buttonLink: "#"
  },
  {
    package: "Paquete ELITE",
    description: "⭐ Para negocios en crecimiento que necesitan mayor presencia",
    details: [
      "✅ 5 Secciones.",
      "✅ Diseño responsivo.",
      "✅ Formulario y maps.",
      "✅ Certificado SSL.",
      "✅ Optimización SEO.",
      "✅ Dominio y hosting 1 año.",
      "✅ Integración con APIs externas.",
      "✅ Mantenimiento incluido.",
      "❌ Sistema de gestión de contenido (CMS).",
      "❌ Funcionalidades adicionales a medid.",
      "📆 Tiempo de entrega: 1 a 2 Semanas"
    ],
    note: "📌 Un equilibrio entre funcionalidad y accesibilidad.",
    buttonText: "Contratar ELITE",
    buttonLink: "#"
  },
  {
    package: "Paquete MASTER",
    description: "⭐ Para quienes buscan más personalización y funciones avanzadas",
    details: [
      "✅ 10 Secciones",
      "✅ Diseño responsivo.",
      "✅ Formulario y maps.",
      "✅ Certificado SSL.",
      "✅ Optimización SEO.",
      "✅ Dominio y hosting 1 año.",
      "❌ Integración con APIs externas.",
      "❌ Mantenimiento incluido.",
      "❌ Sistema de gestión de contenido (CMS).",
      "❌ Funcionalidades adicionales a medida.",
      "📆 Tiempo de entrega: 3 a 4 Semanas"
    ],
    note: "📌 Ideal para negocios que requieren una web más avanzada y dinámica.",
    buttonText: "Contratar MASTER",
    buttonLink: "#"
  },
  {
    package: "Paquete ULTIMATE",
    description: "⭐ Solución completa para negocios que requieren más funcionalidades",
    details: [
      "✅ 15 Secciones",
      "✅ Diseño responsivo.",
      "✅ Formulario y maps.",
      "✅ Certificado SSL.",
      "✅ Optimización SEO.",
      "✅ Dominio y hosting 1 año.",
      "✅ Integración con APIs externas.",
      "✅ Mantenimiento incluido.",
      "✅ Sistema de gestión de contenido (CMS).",
      "✅ Funcionalidades adicionales a medida.",
      "📆 Tiempo de entrega: 3 a 4 Semanas"
    ],
    note: "📌 Para empresas o emprendedores que necesitan un sitio web potente y escalable.",
    buttonText: "Contratar ULTIMATE",
    buttonLink: "#"
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const spacerRef = useRef(null);
  const [cardProgress, setCardProgress] = useState(new Array(features.length).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !spacerRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const spacerHeight = spacerRef.current.offsetHeight;
      const scrollProgress = window.innerHeight - sectionRect.top;
      const segment = spacerHeight / features.length;
      const newProgress = features.map((_, i) => {
        const start = i * segment;
        const delta = scrollProgress - start;
        let progress = delta / segment;
        progress = Math.max(0, Math.min(1, progress));
        return progress;
      });
      setCardProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='servicios' className="features-section" ref={sectionRef}>
      <div className="features-container">
        {features.map((item, index) => {
          const progress = cardProgress[index];
          const translateValue = (1 - progress) * 150;
          const cardStyle = {
            transform: `translate(${translateValue}%, ${translateValue}%)`,
            opacity: progress
          };
          // Extraer solo el nombre sin "Paquete"
          const packageName = item.package.replace(/^Paquete\s+/i, '');
          // La segunda card (índice 1) será "black-card", las demás "white-card"
          const cardClass = index === 1 ? "black-card" : "white-card";
          return (
            <div
              key={index}
              className={`feature-card ${cardClass}`}
              style={cardStyle}
            >
              <div className="card-label">
                <span className="label-top">Paquete</span>
                <br />
                <span className="label-bottom">{packageName.toLowerCase()}</span>
              </div>
              <p className="feature-description">{item.description}</p>
              <div className="feature-details">
                {item.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
              <p className="feature-note">{item.note}</p>
              <a href={item.buttonLink}>
                <button className="feature-cta">{item.buttonText}</button>
              </a>
            </div>
          );
        })}
      </div>
      <div className="features-scroll-spacer" ref={spacerRef} />
    </section>
  );
};

export default FeaturesSection;
