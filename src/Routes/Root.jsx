import React from 'react'
import Layout from '../Layout/Layout'
import Header from '../Components/Header/Header'
import ServiciosT from '../Components/ServiciosT/ServiciosT'
import Formulario from '../Components/Formulario/Formulario'
import CallActionProyects from '../Components/CallActionProyects/CallActionProyects';



const Root = () => {
    return (
        <Layout>
            <main>
                <Header />
                <CallActionProyects />     
                <Formulario/>
                <ServiciosT/>
            </main>

        </Layout>
    )
}

export default Root