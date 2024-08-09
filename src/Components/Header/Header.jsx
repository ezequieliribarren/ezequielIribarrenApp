import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Circles from '../Circles/Circles';



const Header = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <Circles />
                    </div>
                    <div className="col-md-6">
                        {/* <h1>¡Hola soy Ezequiel!</h1> */}
                        <div>
                            <p>
                                Hola, soy Ezequiel Iribarren, un desarrollador Frontend apasionado por la creación de experiencias web excepcionales. Durante los últimos tres años, me he especializado en diseñar y desarrollar sitios web y aplicaciones web que combinan funcionalidad y estética. Mi enfoque se centra en construir interfaces intuitivas y atractivas, utilizando tecnologías modernas y mejores prácticas de desarrollo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header