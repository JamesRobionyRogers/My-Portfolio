import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import backgroundImg from '../../assets/Background-Img.png'; 
import mimojiLaptop from '../../assets/Mimoji-Laptop.png'



const Header = () => {

    return (
        <div className="position-relative">
            <header className="p-3 position-absolute w-100 fixed-top" style={{ zIndex : 1 }}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <h3 className="m-0">JDRR</h3>
                        </a>

                        <ul className="nav col-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#skills" className="nav-link px-2 text-white">Skills</a></li>
                            <li><a href="#projects" className="nav-link px-2 text-white">Projects</a></li>
                            <li><a href="#education" className="nav-link px-2 text-white">Education</a></li>
                            <li><a href="#cv" className="nav-link px-2 text-white">CV</a></li>
                        </ul>

                    </div>
                </div>
            </header>

            <div className="container position-absolute ms-5" style={{ top: "10rem" }}>
                <h3>Hi, I'm James Robiony-Rogers <span className="typing"></span> </h3>
                <p className="position-relative ms-3">I am an aspiring software developer</p>

                {/* <!-- Place a button like card, sith somethibg "check out my projects" href="#projects"--> */} 
                <a href="#projects" style={{ color: "white" }}>
                    <div className="card-btn ps-2 pe-2 pt-1 pb-1">
                        <p className="mb-0 font-weight-bold">Check out my projects</p> { /* <!-- text-gradient */ }
                    </div>
                </a>
            </div>

            <div className="position-absolute memoji">
                <img className="mimoji-img" src={mimojiLaptop} alt="" />
            </div>

            <div className="position-relative" style={{ zIndex: -1 }}>
                <img className="img-fluid" src={backgroundImg} alt="" />
            </div>

            

        </div>
    );
}

export default Header;