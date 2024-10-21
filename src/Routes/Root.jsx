import React, { useEffect } from 'react';
import Layout from '../Layout/Layout'
import Header from '../Components/Header/Header'
import ServiciosT from '../Components/ServiciosT/ServiciosT'
import CallActionProyects from '../Components/CallActionProyects/CallActionProyects';
import AsesoriaDesarrollador from '../Components/AsesoriaDesarrollador/AsesoriaDesarrollador'
import { proyectos } from '../proyectos';
import ContactoContent from '../Components/ContactoContent/ContactoContent';




const Root = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    return (
        <Layout>
            <main>
                <Header />
                <div className='contenido-central-root'>
                    <CallActionProyects proyectos={proyectos} />
                    <AsesoriaDesarrollador />
                    <ContactoContent/>
                    <ServiciosT />
                </div>
            </main>

        </Layout>
    )
}

export default Root