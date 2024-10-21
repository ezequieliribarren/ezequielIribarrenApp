import React from 'react'
import ContactoRedes from '../ContactoRedes/ContactoRedes'
import Formulario from '../Formulario/Formulario'


const ContactoContent = () => {
    return (
        <section id='contacto'>
            <div className='row'>
                <div className='col-lg-6'>
                    <Formulario />
                </div>
                <div className='col-lg-6 redes-contacto'>
                    <ContactoRedes />
                </div>
            </div>
        </section>
    )
}

export default ContactoContent