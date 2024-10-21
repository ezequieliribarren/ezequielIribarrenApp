import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink as Link } from 'react-router-hash-link';


const CallActionProyects = ({ proyectos = [] }) => {
    // Filtramos los proyectos destacados
    const proyectosDestacados = proyectos.filter(proyecto => proyecto.destacado);

    // Configuración para Slick Slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        initialSlide: 1,
        slidesToShow: 3,  // Mostrar 3 proyectos a la vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
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
            <h2>Proyectos destacados</h2>
            <Slider {...settings} className='slider-proyects'>
                {proyectosDestacados.map(proyecto => (
                    <div key={proyecto.id} className="grid-item">
                        <Link to={`/proyectos/#${proyecto.id}`} className="image-container">
                            <img src={proyecto.img} alt={proyecto.title} />
                            <div className="overlay">
                                <h3 className="project-title">{proyecto.title}</h3>
                            </div>
                        </Link>
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
