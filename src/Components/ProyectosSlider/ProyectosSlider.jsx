import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavFlotante from '../NavFlotante/NavFlotante';

const ProyectosSlider = ({ proyectos }) => {
    const sliderRef = useRef(null);
    const location = useLocation();
    const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);
    const [hashHandled, setHashHandled] = useState(false);
    const [startTouch, setStartTouch] = useState(null);
    const [videoType, setVideoType] = useState('video'); // Estado para manejar el tipo de video

    const settings = {
        dots: false,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        arrows: false,
    };

    useEffect(() => {
        const handleResize = () => {
            setVideoType(window.innerWidth < 768 ? 'videoCel' : 'video'); // Cambia según el tamaño de la pantalla
        };

        handleResize(); // Establece el tipo de video al montar el componente
        window.addEventListener('resize', handleResize); // Agrega un event listener para el cambio de tamaño

        return () => {
            window.removeEventListener('resize', handleResize); // Limpia el event listener al desmontar
        };
    }, []);

    useEffect(() => {
        if (location.hash && sliderRef.current && !hashHandled) {
            const proyectoId = location.hash.replace('#', '');
            const proyectoIndex = proyectos.findIndex(proyecto => proyecto.id.toString() === proyectoId);
            if (proyectoIndex !== -1) {
                sliderRef.current.slickGoTo(proyectoIndex);
                setHashHandled(true);
            }
        }
    }, [location, proyectos, hashHandled]);

    useEffect(() => {
        const handleScroll = (event) => {
            if (sliderRef.current && isMouseOverSlider) {
                event.preventDefault();
                if (event.deltaY > 0) {
                    sliderRef.current.slickNext();
                } else {
                    sliderRef.current.slickPrev();
                }
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [isMouseOverSlider]);

    const handleTouchStart = (event) => {
        setStartTouch(event.touches[0].clientY);
    };

    const handleTouchMove = (event) => {
        if (!startTouch) return;

        const currentTouch = event.touches[0].clientY;
        const distance = startTouch - currentTouch;

        if (distance > 50) {
            sliderRef.current.slickNext();
            setStartTouch(null);
        } else if (distance < -50) {
            sliderRef.current.slickPrev();
            setStartTouch(null);
        }
    };

    const formatId = (id) => (id < 10 ? `0${id}` : id);

    return (
        <div
            className="proyectos-slider-container"
            onMouseEnter={() => setIsMouseOverSlider(true)}
            onMouseLeave={() => setIsMouseOverSlider(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <NavFlotante />
            <Slider {...settings} ref={sliderRef} className="proyectos-slider">
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} className={`proyecto-slide ${proyecto.className}`} style={{ position: 'relative' }}>
                        <div className="project-id" style={{ position: 'absolute', left: '-50px', top: '10px', color: '#fff', fontSize: '24px' }}>
                            {formatId(proyecto.id)}
                        </div>
                        <div className="card-slide">
                            <div className="video-container">
                                {proyecto[videoType] && ( // Utiliza el tipo de video basado en el tamaño de la pantalla
                                    <video
                                        className="proyecto-video"
                                        src={proyecto[videoType]}
                                        autoPlay
                                        muted
                                        loop
                                        preload="auto"
                                        controls
                                    />
                                )}
                                <div className="card-description">
                                    <div className="d-flex align-items-center title-bandera welcome-center">
                                        <h2>{proyecto.title}</h2>
                                        <img src={proyecto.bandera} alt="" />
                                    </div>
                                    {proyecto.description.includes("<") ? (
                                        <p dangerouslySetInnerHTML={{ __html: proyecto.description }} />
                                    ) : (
                                        <p>{proyecto.description}</p>
                                    )}
                                </div>
                            </div>
                            <div className="skills-container">
                                <ul>
                                    {proyecto.skill1 && <li><img src={proyecto.skill1} alt={proyecto.skill1name} title={proyecto.skill1name} /></li>}
                                    <h4>{proyecto.skill1name}</h4>
                                    {proyecto.skill2 && <li><img src={proyecto.skill2} alt={proyecto.skill2name} title={proyecto.skill2name} /></li>}
                                    <h4>{proyecto.skill2name}</h4>
                                    {proyecto.skill3 && <li><img src={proyecto.skill3} alt={proyecto.skill3name} title={proyecto.skill3name} /></li>}
                                    <h4>{proyecto.skill3name}</h4>
                                    {proyecto.skill4 && <li><img src={proyecto.skill4} alt={proyecto.skill4name} title={proyecto.skill4name} /></li>}
                                    <h4>{proyecto.skill4name}</h4>
                                    {proyecto.skill5 && <li><img src={proyecto.skill5} alt={proyecto.skill5name} title={proyecto.skill5name} /></li>}
                                    <h4>{proyecto.skill5name}</h4>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProyectosSlider;
