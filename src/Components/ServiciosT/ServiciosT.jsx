import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const servicios = [
  'Sitio web a medida',
  'Sitio Wordpress',
  'Mantenimiento Web',
  'Diseño de Ecommerce',
  'Asesorías'
];

const ServiciosT = () => {
  return (
    <div className="servicios-t-container">
      <Link to="/servicios" className="servicios-slider">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-t">
            {servicio}
          </div>
        ))}
      </Link>
    </div>
  );
};

export default ServiciosT;
