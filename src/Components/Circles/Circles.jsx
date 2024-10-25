import React from 'react';
import { ClipLoader } from 'react-spinners';

const Circles = () => {
     return (
          <div className='languages-container'>
               <div className='circles-container'>
                    <div className="circle">
                         <img src="images/languages/html.png" alt="HTML" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/css.png" alt="CSS" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/js.png" alt="Javascript" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/sass.png" alt="Sass" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/api.png" alt="API Rest" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/node.png" alt="Node-Js" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/sql.png" alt="Mysql" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/react.png" alt="React-Js" />
                    </div>
                    <div className="circle">
                         <img src="images/languages/wordpress.png" alt="Wordpress" />
                    </div>
               </div>

               {/* Spinners */}
               <div className="spinner-container">
                    <ClipLoader className='spinner-line-1' color="#00DAA6" size={225} speedMultiplier={0.14} />
                    <ClipLoader className='spinner-line-2' color="#421466" size={230} speedMultiplier={0.13} />
                    <ClipLoader className='spinner-line-3' color="#F8F9FA" size={235} speedMultiplier={0.12} />
                    <ClipLoader className='spinner-line-4' color="#00DAA6" size={240} speedMultiplier={0.11} />
                    
                    <div className='img-about'>
                         <img src="images/img.png" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Circles;
