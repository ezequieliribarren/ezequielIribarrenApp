import React from 'react';
import servicios from '../../servicios'; // Asegúrate de que la ruta sea correcta
import Layout from '../../Layout/Layout';


const ServiciosDetail = () => {
    return (
        <>
            <Layout>
                <div className="servicios-container container">
                    {servicios.map((servicio, index) => (
                        <div className="servicio" key={index}>
                            <div className="imagen">
                                <img src={servicio.imagen} alt={servicio.titulo} />
                            </div>
                            <div className="detalle">
                                <h3>{servicio.titulo}</h3>
                                <p>{servicio.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default ServiciosDetail;
