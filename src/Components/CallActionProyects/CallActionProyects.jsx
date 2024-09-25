import React from 'react';

const CallActionProyects = () => {
    const skills = [
        { title: 'Comunicación', description: 'Me he desarrollado en profesiones con roles pedagógicos, el entendimiento y poder comunicar de forma clara son vitales para un trabajo en equipo.' },
        { title: 'Motivación', description: 'Me impulsa la busqueda de nuevos objetivos y retos, tanto personales como profesionales.' },
        { title: 'Desarrollo', description: 'Al enfrentar problemas, siempre busco nuevas formas de resolverlos, aplicando tanto mis conocimientos como mi capacidad para adaptarme.' },
        { title: 'Superación', description: 'Me gusta enfrentarme a deasafíos a diario. El esfuerzo y poder alcanzar objetivos, de forma sana, siempre es gratificante.' },
    ];

    return (
        <section className='container-call-action-proyects container-fluid'>
           <h2>Habilidades</h2>   
            <div className='call-action-proyects'>
                {skills.map((skill, index) => (
                    <div className='skill' key={index}>
                        <h3>{skill.title}</h3>
                        <p className='skill-description'>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CallActionProyects;
