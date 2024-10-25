import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutCel = () => {
    // Información sobre ti
    const aboutInfo = [
        {
            text: "Front-End Developer. Hace 3 años creando apps y sitios web.",
            img: "images/code.svg"
        },
        {
            text: "Autodidacta en constante evolución, siempre en busca de nuevos desafíos.",
            img: "images/me.svg"
        },
        {
            text: "Freelancer y fundador de Versa Digital (Nuestra agencia de Marketing).",
            img: "images/idea.svg"
        },
        {
            text: "Docente, brindo talleres de Desarrollo Web en Escuelas Secundarias.",
            img: "images/teacher.svg"
        },
        {
            text: "Trabajo en equipo con profesionales en Diseño UX/UI y Marketing.",
            img: "images/team.svg"
        },
    ];

    // Configuración del slider para un slider vertical
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        vertical: true,
        verticalSwiping: true,
        centerMode: true, 
        centerPadding: '0px', 

    };
    
    
    return (
        <section className='about-cel'>
            <Slider {...settings} className='slider-about'>
                {aboutInfo.map((info, index) => (
                    <div key={index} className="about-slide">
                        <div className="about-content">
                            <img src={info.img} alt="" className='about-icon' />
                            <p>{info.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default AboutCel;
