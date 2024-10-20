import React from 'react'
import Layout from '../Layout/Layout'
import Header from '../Components/Header/Header'
import ServiciosT from '../Components/ServiciosT/ServiciosT'
import Formulario from '../Components/Formulario/Formulario'
import CallActionProyects from '../Components/CallActionProyects/CallActionProyects';
import AsesoriaDesarrollador from '../Components/AsesoriaDesarrollador/AsesoriaDesarrollador'
import { proyectos } from '../proyectos';




const Root = () => {
    return (
        <Layout>
            <main>
                <Header />
                <CallActionProyects proyectos={proyectos} />
                <AsesoriaDesarrollador/>     
                <Formulario/>
                <ServiciosT/>
            </main>

        </Layout>
    )
}

export default Root