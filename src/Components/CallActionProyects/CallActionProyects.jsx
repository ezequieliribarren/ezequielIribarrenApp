import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CallActionProyects = ({ proyectos = [] }) => {
    const [randomProyectos, setRandomProyectos] = useState([]);

    useEffect(() => {
        if (proyectos.length > 0) {
            const getLatestProjects = (array) => {
                // Ordenar proyectos por fecha (asumiendo que 'fecha' es una propiedad de tus proyectos)
                return array.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            };

            const latestProjects = getLatestProjects(proyectos).slice(0, 5);
            setRandomProyectos(latestProjects);
        }
    }, [proyectos]);

    // Configuración para Slick Slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,  // Mostrar 3 proyectos a la vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="container-fluid portfolio-preview">
            <h2>Ultimos proyectos</h2>
            <Slider {...settings} className='slider-proyects'>
                {randomProyectos.map((proyecto) => (
                    <div key={proyecto.id} className="grid-item">
                        <div className="image-container">
                            <img src={proyecto.img} alt={proyecto.title} className="project-image" />
                            <div className="overlay">
                                <h3 className="project-title">{proyecto.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="grid-item">
                    <div className="view-portfolio">
                        <h3>VER PORTFOLIO</h3>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default CallActionProyects;
