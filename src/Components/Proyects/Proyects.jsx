import React from 'react';
import proyectos from '../../proyectos'; // Asegúrate de que la ruta sea correcta
import Layout from '../../Layout/Layout';

const Proyects = () => {
    return (
        <>
            <Layout>
                <h2>Portfolio</h2>
                <div className="container container-proyects">
                    <div className="row">
                        {proyectos.map((proyecto, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="project-card">
                                    <img src={proyecto.imagen} alt={proyecto.titulo} />
                                    <h3>{proyecto.titulo}</h3>
                                    <h4>{proyecto.subtitulo}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>

        </>
    );
};

export default Proyects;
