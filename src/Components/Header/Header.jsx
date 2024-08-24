import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Circles from '../Circles/Circles';
import DraggableSphere from '../DraggableSphere/DraggableSphere';
import DropZone from '../DropZone/DropZone';

const Header = () => {
    const [isBurning, setIsBurning] = useState(false);

    const handleDrop = () => {
        setIsBurning(true);
    };

    return (
    
            <section className={`header-section ${isBurning ? 'burning' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 d-flex justify-content-start">
                            <Circles />
                        </div>
                        <div className="col-md-7 contenedor-description">
                            <div className="description-box">
                                <div className="description-content">
                                    <p><span className="highlight">Rol:</span> Frontend - Developer</p>
                                    <p><span className="highlight">Experiencia:</span> +3 años en desarrollo web y aplicaciones interactivas</p>
                                    <p>¡Gracias por llegar hasta acá!</p>
                                    <p>Mi nombre es Ezequiel, desde que descubrí el mundo de lo digital y la programación, cada dia me esmero por ampliar mi margen de conocimiento y apuntarme a proyectos superadores que generen una grán experiencia.</p>
                                    <p>Actualmente me encuentro trabajando como profesional independiente y en una agencia de marketing que te invito a visitar <span className='highlight'><a href="https://www.versadigital.com.ar/">Versa Digital</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default Header;
