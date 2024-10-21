import React, { useEffect } from 'react';
import ServiciosDetail from '../Components/ServiciosDetail/ServiciosDetail'

const Servicios = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 

  return (
    <main>
        <ServiciosDetail/>
    </main>
  )
}

export default Servicios