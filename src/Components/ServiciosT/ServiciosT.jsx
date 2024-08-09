import React from 'react';

const servicios = [
  'Sitio web a medida',
  'Sitio web Wordpress',
  'Mantenimiento Web',
  'Asesorías'
];

const ServiciosT = () => {
  return (
    <div className="servicios-t-container">
      <div className="servicios-slider">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-t">
            {servicio}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosT;
