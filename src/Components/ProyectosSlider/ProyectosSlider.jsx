import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProyectosSlider = ({ proyectos }) => {
  const sliderRef = useRef(null);
  const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);

  const settings = {
    dots: true,
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

  // Función para formatear el ID
  const formatId = (id) => {
    return id < 10 ? `0${id}` : id; // Agrega un 0 a la izquierda si el ID es menor que 10
  };

  return (
    <div
      className="proyectos-slider-container"
      onMouseEnter={() => setIsMouseOverSlider(true)}
      onMouseLeave={() => setIsMouseOverSlider(false)}
    >
      <Slider {...settings} ref={sliderRef} className="proyectos-slider">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className={`proyecto-slide ${proyecto.className}`} style={{ position: 'relative' }}>
            {/* ID en posición absoluta, fuera de la tarjeta */}
            <div className="project-id" style={{ position: 'absolute', left: '-50px', top: '10px', color: '#fff', fontSize: '24px' }}>
              {formatId(proyecto.id)} {/* Formateamos el ID aquí */}
            </div>
            <div className="card-slide">
              <div className="video-container">
                {proyecto.video && (
                  <video
                    className="proyecto-video"
                    src={proyecto.video}
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    controls
                  />
                )}
                <div className="card-description">
                  <h2>{proyecto.title}</h2>
                  <p>{proyecto.description}</p>
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
