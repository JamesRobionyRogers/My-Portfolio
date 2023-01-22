import React from 'react';

import CVCardPreview from '../../assets/CV_JamesRobiony-Rogers.pdf'; 

import './PreviewCV.scss'


const PreviewCV = () => {
    return (
        <div id="cv" className="mt-5 pt-5 pb-5">
            <div className="card me-5 ms-5 text-bg-gray border border-light overflow-hidden" style={{marginTop: "-1rem"}}>
                <div className="card-body p-4">
                    <h4 className="card-title mb-4">
                        <span className="text-gradient">Check out my CV</span>
                    </h4>

                    <div className="d-flex flex-wrap align-items-center justify-content-end me-4 ms-4" style={{fontSize: "2rem", color: "#b7bfc7"}}>
                        {/* <!-- Content --> */}

                        <div className="cv-preview card-shadow position-absolute">
                            <img className="img-thumbnail mw-10" src={CVCardPreview} alt="Preview of James Robiony-Rogers CV" />
                        </div>
                    </div>

                    <p className="card-text" style={{maxWidth: "60%"}}>
                        Feel free to click on the preview to the right for a sneak preview of my CV or download it yourself using the link below
                    </p>

                    <div className=""> {/* card-buttons */}
                        <a className="download-cv" href={CVCardPreview} download>
                            Download CV
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PreviewCV;