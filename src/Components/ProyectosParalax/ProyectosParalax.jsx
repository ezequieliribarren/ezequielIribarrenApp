import React, { useRef, useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

const ProyectosParallax = ({ proyectos }) => {
  return (
    <div className="proyectos-container">
      {proyectos.map((proyecto, index) => (
        <ParallaxProyecto key={proyecto.id} proyecto={proyecto} index={index} />
      ))}
    </div>
  );
};

const ParallaxProyecto = ({ proyecto, index }) => {
  const strength = index % 2 === 0 ? -200 : 200;
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleAnimationEnd = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
<Parallax
  strength={strength}
  className="proyecto-parallax"
  style={{
    backgroundImage: `url(${proyecto.img})`,  // Establece la imagen de fondo
  }}
>
      <div className="proyecto-content">
        {/* Descripción con animación dinámica */}
        <div 
          className="proyecto-description fade-in"
          style={{ animationDelay: `${index * 0.5}s` }} // Añadir un retraso en base al índice del proyecto
        >
          <h3>{proyecto.title}</h3>
          <p>{proyecto.description}</p>
          <div className="proyecto-skills">
            <img src={proyecto.skill1} alt={proyecto.skill1name} />
            <img src={proyecto.skill2} alt={proyecto.skill2name} />
            <img src={proyecto.skill3} alt={proyecto.skill3name} />
            <img src={proyecto.skill4} alt={proyecto.skill4name} />
            <img src={proyecto.skill5} alt={proyecto.skill5name} />
          </div>
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
            Ver Proyecto
          </a>
        </div>

        {/* Video */}
        <div 
          className="video-container"
          onAnimationEnd={handleAnimationEnd}
        >
          <video 
            ref={videoRef}
            className="proyecto-video" 
            src={proyecto.video} 
            muted 
            loop 
            preload="auto"
            autoPlay={isVideoPlaying ? 'true' : 'false'}  
            controls="true"
            onPlay={() => {
              if (videoRef.current) {
                videoRef.current.playbackRate = 1.1;
              }
            }}
          />
        </div>
      </div>
    </Parallax>
  );
};

export default ProyectosParallax;
