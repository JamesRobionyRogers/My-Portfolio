import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    SiJava, 
    SiPython,
    SiR,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiApple,
    SiVisualstudiocode  
} from 'react-icons/si';

import './Skills.scss';

const Skills = () => {
  return (
      <div id="skills" className="position-relative mb-5">

          <div className="card me-5 ms-5 text-bg-gray border border-light" style={{marginTop: "-5rem"}}>
              <div className="card-body p-4">
                  	<h4 className="card-title mb-4">
                      	<span className="text-gradient">Skills & Technologies</span>
                  	</h4>

                  	<div className="d-flex flex-wrap align-items-center justify-content-between me-4 ms-4" style={{fontSize: "2rem", color: "#b7bfc7"}}>
                      	<ul className="m-0 p-0">
                            <SiJava />
                            <SiPython />
                            <SiR />
                      	</ul>

                      	<ul className="m-0 p-0">
                            <SiHtml5 />
                            <SiCss3 />
                            <SiJavascript />
                      	</ul>

                      	<ul className="m-0 p-0">
                            <SiVisualstudiocode />
                            <SiApple style={{ marginBottom: "5px" }} />
                      	</ul>
                  	</div>

                  <p className="card-text"></p>
              </div>
          </div>

          {/* Maybe add in github lines */}

      </div>
  );
}

export default Skills;