import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Circles from '../Circles/Circles';

const Header = () => {
    return (
        <section className="header-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Circles />
                    </div>
                    <div className="col-md-6 text-center text-md-left">
                        <div className="headline">
                            <h1 className="glitch">Building the Future</h1>
                            <p className="tagline">Crafting innovative digital solutions with <span className="highlight">code</span> & <span className="highlight">creativity</span>.</p>
                            <div className="skills">
                                <p className="skill">Frontend Wizard</p>
                                <p className="skill">React Enthusiast</p>
                                <p className="skill">UX/UI Strategist</p>
                            </div>
                            <div className="action-buttons">
                                <button className="btn btn-primary">Explore Projects</button>
                                <button className="btn btn-outline-light">Let's Collaborate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
