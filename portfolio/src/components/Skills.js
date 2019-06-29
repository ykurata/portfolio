import React, { Component } from 'react';
import '../css/Skills.css';


class Skills extends Component {
  render() {
    return (
      <section id="Skills">
        <div className="skills-container">
          <div className="skills-title">
            <h2 className="main-title">Skills</h2>
          </div>
          <div className="icons-container">
            <div className="icon-container">
              <i className="fab fa-html5"></i>
              <div className="icon-inner-container">
                <p>HTML5</p>
              </div>
            </div>
            <div className="skill-icon">
              <i className="fab fa-css3-alt"></i>
              <div className="icon-inner-container">
                <p>CSS3</p>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-js"></i>
              <div className="icon-inner-container-js">
                <p>JavaScript</p>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-react"></i>
              <div className="icon-inner-container-react">
                <p>React</p>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-bootstrap"></i>
              <div className="icon-inner-container-bootstrap">
                <p>Bootstrap</p>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-python"></i>
              <div className="icon-inner-container-python">
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;
