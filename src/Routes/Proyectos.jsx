import React, { useEffect } from 'react';
import { proyectos } from '../proyectos';
import ProyectosSlider from '../Components/ProyectosSlider/ProyectosSlider';


const Proyectos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 

  return (
      <main>
        <section id="proyectos-section">
          <ProyectosSlider proyectos={proyectos} />
        </section>
      </main>
  );
};

export default Proyectos;
