import React from 'react';
import { Link } from 'react-scroll'; // Para el desplazamiento suave entre secciones

const PortfolioIntro = () => {
  return (
    <div className="portfolio-intro">
      <div className="intro-content">
        <h1>Bienvenido a mi Portfolio</h1>
        <p>Desliza hacia abajo para ver mis proyectos</p>
        <Link 
          to="proyectos-section" // ID de la sección de proyectos
          smooth={true}
          duration={500}
          className="scroll-icon"
        >
          <img src="/scroll.png" alt="Scroll" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioIntro;
