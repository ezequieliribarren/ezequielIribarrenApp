import React, { useRef, useState } from 'react';
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

  // Crear un array de skills para mapear
  const skills = [
    { img: proyecto.skill1, name: proyecto.skill1name },
    { img: proyecto.skill2, name: proyecto.skill2name },
    { img: proyecto.skill3, name: proyecto.skill3name },
    { img: proyecto.skill4, name: proyecto.skill4name },
    { img: proyecto.skill5, name: proyecto.skill5name },
  ];

  return (
    <Parallax
      strength={strength}
      bgImage={proyecto.img}
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
            {skills.map((skill, i) => (
              skill.img ? ( // Verifica si la imagen de la habilidad existe
                <img key={i} src={skill.img} alt={skill.name} />
              ) : null
            ))}
          </div>
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
