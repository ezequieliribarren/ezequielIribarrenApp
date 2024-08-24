import React from 'react';
import servicios from '../../servicios'; // Asegúrate de que la ruta sea correcta
import Layout from '../../Layout/Layout';

const ServiciosDetail = () => {
    return (
        <Layout>
            <div className="servicios-container container">
                {servicios.map((servicio, index) => (
                    <React.Fragment key={index}>
                        <div className="servicio">
                            <div className="imagen">
                                <img src={servicio.imagen} alt={servicio.titulo} />
                            </div>
                            <div className="detalle">
                                <h3>{servicio.titulo}</h3>
                                <p>{servicio.descripcion}</p>
                            </div>
                        </div>
                        {index < servicios.length - 1 && <div className="futuristic-divider"></div>}
                    </React.Fragment>
                ))}
            </div>
        </Layout>
    );
};

export default ServiciosDetail;
