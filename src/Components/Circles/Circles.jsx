import React from 'react';
import { ClipLoader } from 'react-spinners';

const Circles = () => {
    return (
        <div className='languages-container'>
            <div className='circles-container'>
                <div className="circle">HTML</div>
                <div className="circle">CSS</div>
                <div className="circle">Javascript</div>
                <div className="circle">React Js</div>
                <div className="circle">Sass</div>
                <div className="circle">Node Js</div>
            </div>
            <div className="spinner-container">
                <ClipLoader color="#00DAA6" size={150} speedMultiplier={0.14} />
                <ClipLoader color="#421466" size={155} speedMultiplier={0.13} />
                <ClipLoader color="#F8F9FA" size={160} speedMultiplier={0.12} />
                <ClipLoader color="#00DAA6" size={165} speedMultiplier={0.11} />
            </div>
        </div>

    );
};

export default Circles;
