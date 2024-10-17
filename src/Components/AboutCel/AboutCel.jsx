import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutCel = () => {
    // Información sobre ti
    const aboutInfo = [
        {
            text: "Front-End Developer. Hace 3 años creando apps y sitios web.",
            img: "images/code.png"
        },
        {
            text: "Autodidacta en constante evolución, siempre en busca de nuevos desafíos.",
            img: "images/book.png"
        },
        {
            text: "Freelancer y fundador de Versa Digital (Nuestra agencia de Marketing).",
            img: "images/code.png"
        },
        {
            text: "Docente, brindo talleres de Desarrollo Web en Escuelas Secundarias.",
            img: "images/book.png"
        },
        {
            text: "Colaboro a diario con profesionales del Diseño UX/UI y Marketing.",
            img: "images/group.png"
        },
    ];

    // Configuración del slider
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
    };

    return (
        <section className='about-cel'>
            <div className='img-about'>
                <img src="images/img.png" alt="" />
            </div>
         
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
