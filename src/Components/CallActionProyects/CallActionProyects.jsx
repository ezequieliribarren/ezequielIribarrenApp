import React from 'react';

const CallActionProyects = () => {
    const skills = [
        { title: 'Comunicación', description: 'Habilidad para transmitir ideas de manera clara y efectiva.' },
        { title: 'Motivación', description: 'Capacidad para inspirar y mantener el enfoque en los objetivos.' },
        { title: 'Desarrollo', description: 'Competencia en el desarrollo de soluciones innovadoras.' },
        { title: 'Superación', description: 'Habilidad para superar desafíos y aprender de ellos.' },
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
