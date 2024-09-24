import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Circles from '../Circles/Circles';
import About from '../About/About';

const Header = () => {
    const [isBurning, setIsBurning] = useState(false);

    const handleDrop = () => {
        setIsBurning(true);
    };

    return (
    
            <section className={`header-section ${isBurning ? 'burning' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 d-flex justify-content-start">
                            <Circles />
                        </div>
                        <div className="col-md-7">
             <About/>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default Header;
