import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Circles from '../Circles/Circles';

const Header = () => {
    return (
        <section className="header-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Circles />
                    </div>
                    <div className="col-md-6">
                        <div className="header-description">
                            <h1>Hola, soy Ezequiel Iribarren</h1>
                            <p>Con 3 años de experiencia en desarrollo web desde Argentina, mi misión es llevar tus ideas a la realidad con creatividad y eficiencia. Soy apasionado por la comunicación clara y el trabajo en equipo, y me enorgullece liderar mi propia agencia, Versa Digital, donde la innovación y la tecnología se encuentran.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
