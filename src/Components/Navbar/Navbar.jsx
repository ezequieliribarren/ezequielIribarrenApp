import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navegacion'>
      <div className='logo-navbar'>
    <img src="images/logo.png" alt="Logo Ezequiel Iribarren" />
      </div>
      <div>
        
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/proyectos">Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='redes'>
        <a className="nav-link" href="https://www.linkedin.com">
          <img src="images/navbar/linkedin.png" alt="LinkedIn" />
        </a>
        <a className="nav-link" href="https://www.linkedin.com">
          <img src="images/navbar/linkedin.png" alt="LinkedIn" />
        </a>
        <a className="nav-link" href="https://www.github.com">
          <img src="images/navbar/github.png" alt="GitHub" />
        </a>
      </div>
    </div>

  );
};

export default Navbar;
