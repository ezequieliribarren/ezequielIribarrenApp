import React from 'react'
import Layout from '../Layout/Layout'
import Header from '../Components/Header/Header'
import ServiciosT from '../Components/ServiciosT/ServiciosT'
import Formulario from '../Components/Formulario/Formulario'


const Root = () => {
    return (
        <Layout>
            <main>
                <Header />
                <ServiciosT/>
                <Formulario/>
            </main>

        </Layout>
    )
}

export default Root