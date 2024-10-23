import React, { useState, useEffect } from 'react';
import servicios from '../../servicios'; // Asegúrate de que la ruta sea correcta
import Layout from '../../Layout/Layout';

const ServiciosDetail = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Monitorea el tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Limpia el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Layout>
            <section id='servicios'>
                <div className="servicios-container container">
                    {servicios.map((servicio, index) => (
                        <React.Fragment key={index}>
                            <div className="servicio-card row" style={{ width: '100%', margin: '1rem auto', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.20)', backdropFilter: 'blur(5px)', padding: '1rem' }}>
                                <div className="imagen col-lg-4">
                                    <img src={servicio.imagen} alt={servicio.titulo} style={{ borderRadius: '10px', width: '100%', height: 'auto' }} />
                                </div>
                                <div className="detalle col-lg-8">
                                    <h2>{servicio.titulo}</h2>
                                    <p>
                                        {expandedIndex === index 
                                            ? servicio.descripcion 
                                            : (windowWidth < 900 
                                                ? servicio.descripcion.substring(0, 200) + '...' 
                                                : servicio.descripcion)}
                                    </p>
                                    <span>
                                        <button className='hidde-span' onClick={() => toggleExpand(index)}>
                                            {expandedIndex === index ? 'Leer menos' : 'Leer más'}
                                        </button>
                                    </span>
                                    <div className='d-flex justify-content-start mt-5'>
                                        <button>
                                            Más información <span style={{ marginLeft: "0.5rem" }}><img src="images/wp.png" alt="" /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {index < servicios.length - 1 && <div className="futuristic-divider"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default ServiciosDetail;
