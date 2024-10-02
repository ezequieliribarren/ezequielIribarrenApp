import React, { useEffect, useState } from 'react';
import { proyectos } from '../proyectos';
import ProyectosParalax from '../Components/ProyectosParalax/ProyectosParalax';
import PortfolioIntro from '../Components/PortfolioIntro/PortfolioIntro';
import Layout from '../Layout/Layout';

const Proyectos = () => {
  const [scrolled, setScrolled] = useState(false); // Estado para verificar si ya se hizo el scroll

  useEffect(() => {
    const handleScroll = () => {
      // Solo realizar el scroll si no se ha hecho previamente
      if (!scrolled && window.scrollY > 1) {
        setScrolled(true); // Marcar como que ya se hizo el scroll
        window.scrollTo({
          top: window.innerHeight, // Desplazamiento hacia el siguiente 100vh
          behavior: 'smooth', // Transición suave
        });
      }
    };

    // Asocia el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); // El hook se vuelve a ejecutar solo si `scrolled` cambia

  return (
    <Layout>
    <main>
      <PortfolioIntro />
      <ProyectosParalax proyectos={proyectos} />
    </main>
    </Layout>


  );
};

export default Proyectos;
