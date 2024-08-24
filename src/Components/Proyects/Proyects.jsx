import React from 'react';
import proyectos from '../../proyectos'; 
import Layout from '../../Layout/Layout';

const Proyects = () => {
    return (
        <Layout>
            <h2>Proyectos realizados </h2>
            <div className="container-proyects container-fluid">
                {proyectos.map((proyecto, index) => (
                    <div className="project-card" key={index}>
                        <img src={proyecto.imagen} alt={proyecto.titulo} />
                        {/* <h3>{proyecto.titulo}</h3>
                        <h4>{proyecto.subtitulo}</h4> */}
                    </div>
                ))}
            </div>
            
        </Layout>
    );
};

export default Proyects;
