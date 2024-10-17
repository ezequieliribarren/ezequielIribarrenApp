import React, { useEffect, useState } from 'react';
import { proyectos } from '../proyectos';
import ProyectosParalax from '../Components/ProyectosParalax/ProyectosParalax';
import PortfolioIntro from '../Components/PortfolioIntro/PortfolioIntro';
import Layout from '../Layout/Layout';

const Proyectos = () => {

  return (
    <Layout>
      <main>
        <PortfolioIntro  />
        <section id="proyectos-section">
          <ProyectosParalax proyectos={proyectos} />
        </section>
      </main>
    </Layout>
  );
};

export default Proyectos;
