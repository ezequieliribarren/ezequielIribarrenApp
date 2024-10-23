import React, { useEffect } from 'react';
import { proyectos } from '../proyectos';
import ProyectosSlider from '../Components/ProyectosSlider/ProyectosSlider';
import PortfolioIntro from '../Components/PortfolioIntro/PortfolioIntro';
import Layout from '../Layout/Layout';

const Proyectos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 

  return (
    <Layout>
      <main>
        {/* <PortfolioIntro  /> */}
        <section id="proyectos-section">
          <ProyectosSlider proyectos={proyectos} />
        </section>
      </main>
    </Layout>
  );
};

export default Proyectos;
