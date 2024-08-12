import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link className="footer-link" to="/proyectos">Proyectos</Link>
          <Link className="footer-link" to="/servicios">Servicios</Link>
          <Link className="footer-link" to="/contacto">Contacto</Link>
        </div>
        <div className="footer-social">
          <a className="footer-social-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="images/navbar/linkedin.png" alt="LinkedIn" />
          </a>
          <a className="footer-social-link" href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src="images/navbar/github.png" alt="GitHub" />
          </a>
        </div>
        <div className="footer-author">
          <p>Ezequiel Iribarren</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
