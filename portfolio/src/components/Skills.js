import React, { Component } from 'react';
import '../css/Skills.css';


class Skills extends Component {
  render() {
    return (
      <section id="Skills">
        <div className="container">
          <div className="skills-title">
            <h2 className="main-title">Skills</h2>
          </div>
          <div className="icons-container">
            <div className="icon-container">
              <i className="fab fa-node-js"></i>
              <div className="icon-inner-container-node">
                <h6>NodeJS</h6>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-react"></i>
              <div className="icon-inner-container-react">
                <h6>React</h6>
              </div>
            </div>
            <div className="icon-container">
              <i className="fas fa-database"></i>
              <div className="icon-inner-container-database">
                <h6>MongoDB/SQL</h6>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-python"></i>
              <div className="icon-inner-container-python">
                <h6>Python</h6>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-html5"></i>
              <div className="icon-inner-container-html">
                <h6>HTML5</h6>
              </div>
            </div>
            <div className="icon-container">
              <i className="fab fa-css3-alt"></i>
              <div className="icon-inner-container-css">
                <h6>CSS3</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;
