import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.scss';

import backgroundImg from '../../assets/Background-Img.png'; 
import mimojiLaptop from '../../assets/Mimoji-Laptop.png'

// TODO: Transfer all the CSS for the header into header.scss

const Header = () => {

    return (
        <div id="header" className="position-relative">
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

            <div className="header-text container ms-5">

                <p>Hello, my name is</p>
                <h1> James Robiony-Rogers</h1>

                <TypeAnimation
                    sequence={[
                        'I am an aspiring software developer', 3000,
                        'I am a student studying Software Engineering', 3000,
                        'I am a keen Mountain Biker', 1000,
                        'I am a keen Mountain Biker and Hockey player', 3000
                    ]}
                    wrapper="p"
                    cursor={true}
                    repeat={Infinity}
                    style={{ marginLeft: "0.5rem" }}
                />

            </div>

            <a className="projects-link" href="#projects">Explore Projects</a>


            <div className="mimoji-container position-absolute memoji">
                <img className="mimoji-img" src={mimojiLaptop} alt="" />
            </div>

            <div className="background-img position-relative">
                <img className="img-fluid" src={backgroundImg} alt="" />
            </div>

            

        </div>
    );
}

export default Header;