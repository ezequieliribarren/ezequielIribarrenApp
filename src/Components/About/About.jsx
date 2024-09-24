import React, { useState, useEffect } from 'react';

const About = () => {
  const titles = [
    "Hola! Soy Ezequiel Iribarren",
    "Hace más de 3 años me dedico a realizar aplicaciones y sitios web",
    "Soy docente y brindo talleres de desarrollo web",
    "Trabajo a diario con profesionales del diseño y del marketing",
    "Visitá mi portfolio"
  ]; // Los títulos que alternarán
  const [displayedTitles, setDisplayedTitles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Comenzar con el primer título
    if (currentIndex < titles.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedTitles((prevTitles) => [...prevTitles, titles[currentIndex]]); // Añadir el título actual
        setCurrentIndex((prevIndex) => prevIndex + 1); // Pasar al siguiente índice
      }, 2000); // Esperar 2 segundos

      return () => clearTimeout(timeoutId); // Limpiar el timeout al desmontar
    }
  }, [currentIndex, titles]);

  return (
    <div className="title-container">
      {displayedTitles.map((title, index) => (
        <h1 key={index} className="animated-title" data-text={title}>
          {title}
        </h1>
      ))}
    </div>
  );
};

export default About;
