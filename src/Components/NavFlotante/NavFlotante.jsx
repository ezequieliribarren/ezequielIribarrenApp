import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const NavFlotante = () => {
  return (
    <nav className="navbar navbar-expand nav-flotante">
    <div className="container-fluid">
      <div className="navbar-collapse justify-content-end" id="navbarNav">
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
   )
}

export default NavFlotante