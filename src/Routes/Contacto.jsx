import React, { useEffect } from 'react';
import Layout from '../Layout/Layout'
import ContactoContent from '../Components/ContactoContent/ContactoContent'



const Contacto = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <Layout>
                <div className='contenido-central-root'>
                    <ContactoContent />
                </div>

            </Layout>

        </main>
    )
}

export default Contacto