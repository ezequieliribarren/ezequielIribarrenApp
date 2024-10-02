import React from 'react';
import servicios from '../../servicios'; // Asegúrate de que la ruta sea correcta
import Layout from '../../Layout/Layout';

const ServiciosDetail = () => {
    return (
        <Layout>
            <section id='servicios'>
                <div className="servicios-container container">
                    {servicios.map((servicio, index) => (
                        <React.Fragment key={index}>
                            <div className="servicio">
                                <div className="imagen">
                                    <img src={servicio.imagen} alt={servicio.titulo} />
                                </div>
                                <div className="detalle">
                                    <h2>{servicio.titulo}</h2>
                                    <p>{servicio.descripcion}</p>
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
