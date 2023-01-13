import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { 
    SiApple,
    SiVisualstudiocode  
} from 'react-icons/si'

import VSCode from '../../assets/icons/Visual_Studio_Code.png';
// import MacBookPro from '../../assets/icons/MacBook_Pro.png'; 
import Apple from '../../assets/icons/Apple.png';
import HTML from '../../assets/icons/HTML5.png';
import CSS from '../../assets/icons/CSS.png';
import JavaScript from '../../assets/icons/Javascript.png';
import Java from '../../assets/icons/Java.png'
import Python from '../../assets/icons/Python.png'
import RDataScience from '../../assets/icons/R.png'

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
                            {/* <img src={Java} alt="Java" /> */}
                            {/* <img src={Python} alt="Python" /> */}
                            {/* <img src={RDataScience} alt="RDataScience" /> */}


                            <i className="devicon-java-plain"></i>
                            <i className="devicon-python-plain"></i>
                            <i className="devicon-r-original"></i>
                      </ul>

                      <ul className="m-0 p-0">
                            {/* <img src={HTML} alt="HTML5" /> */}
                            {/* <img src={CSS} alt="CSS3" /> */}
                            {/* <img src={JavaScript} alt="JavaScript" /> */}

                            
                            <i className="devicon-html5-plain"></i>
                            <i className="devicon-css3-plain"></i>
                            <i className="devicon-javascript-plain"></i>
                      </ul>

                      <ul className="m-0 p-0">
                            {/* <SiVisualstudiocode /> */}
                            {/* <SiApple style={{ marginBottom: "5px" }} /> */}

                            {/* <img src={VSCode} alt="vscode" /> */}
                            {/* <img src={Apple} alt="apple" /> */}


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