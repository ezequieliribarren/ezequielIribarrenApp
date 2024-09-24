import React, { useState, useRef } from 'react';
import { proyectos } from '../../proyectos';
import Layout from '../../Layout/Layout';

const Proyects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const videoRefs = useRef(proyectos.map(() => React.createRef()));

    const handleHover = (index) => {
        setHoveredProject(index);
        // Pausar todos los demás videos
        videoRefs.current.forEach((ref, i) => {
            if (i !== index && ref.current) {
                ref.current.pause();
            }
        });
        // Reproducir el video actual y ajustar la velocidad
        if (videoRefs.current[index].current) {
            videoRefs.current[index].current.play();
            videoRefs.current[index].current.playbackRate = 1; // Reproducción más rápida
        }
    };

    const handleLeave = (index) => {
        setHoveredProject(null);
        // Pausar el video actual al salir y volver al segundo 0
        if (videoRefs.current[index].current) {
            videoRefs.current[index].current.pause();
            videoRefs.current[index].current.currentTime = 0;
        }
    };

    return (
        <Layout>
            <h2>Proyectos realizados</h2>
            <div className="container-proyects container-fluid">
                {proyectos.map((proyecto, index) => (
                    <div className='proyect-card-container'>

                        <div
                            className={`project-card ${hoveredProject === index ? 'hovered' : ''}`}
                            key={proyecto.id}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleLeave(index)}
                        >
                            <div className="project-image">
                                <video
                                    className="video-project"
                                    loop
                                    muted
                                    preload="auto"
                                    src={proyecto.video}
                                    ref={videoRefs.current[index]}
                                    poster={proyecto.img} // Asegúrate de que esta imagen sea de alta resolución
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Añadido objectFit aquí si no se aplica en el CSS
                                ></video>

                            </div>
                            <div className="project-info">
                                <h3>{proyecto.title}</h3>
                                <p>{proyecto.description}</p>
                                <div className="project-skills">
                                    <div className="skill">
                                        <img src={proyecto.skill1} alt={proyecto.skill1name} />
                                    </div>
                                    <div className="skill">
                                        <img src={proyecto.skill2} alt={proyecto.skill2name} />
                                    </div>
                                    <div className="skill">
                                        <img src={proyecto.skill3} alt={proyecto.skill3name} />
                                    </div>
                                    <div className="skill">
                                        <img src={proyecto.skill4} alt={proyecto.skill4name} />
                                    </div>
                                    <div className="skill">
                                        <img src={proyecto.skill5} alt={proyecto.skill5name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ver-sitio'>
                            <a target='_blank' href={proyecto.link}>Ver sitio</a>
                        </div>



                    </div>

                ))}
            </div>
        </Layout>
    );
};

export default Proyects;
