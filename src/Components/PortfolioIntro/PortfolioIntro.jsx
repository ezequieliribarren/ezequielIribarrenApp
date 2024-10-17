import React from 'react';
import { Link } from 'react-scroll'; // Para el desplazamiento suave entre secciones

const PortfolioIntro = () => {
  return (
    <div className="portfolio-intro" style={{ height: '100vh' }}>
      <div className="intro-content">
        <h1>Bienvenido a mi Portfolio</h1>
        <p>Click en la flecha para ver los proyectos</p>
        <Link 
          to="proyectos-section" // ID de la sección de proyectos
          smooth={true}
          duration={600}
          className="scroll-icon"
        >
          <img src="/scroll.png" alt="Scroll" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioIntro;
