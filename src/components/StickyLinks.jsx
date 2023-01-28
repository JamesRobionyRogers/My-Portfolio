import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si'

import './StickyLinks.scss'; 

const StickyLinks = () => {
    return (
        <div className="sticky-links text-bg-dark">
            <a className="sticky-link sticky-link-github" href="https://github.com/JamesRobionyRogers">
                <i className="sticky-link-github"><SiGithub /></i>
            </a>

            <a className="sticky-link sticky-link-linkedin" href="https://www.linkedin.com/in/JamesRobionyRogers/">
                <SiLinkedin />
            </a>
        </div>
    );
}

export default StickyLinks;