import React, { Component } from 'react';
import '../css/Projects.css';
import recordsDatabase from '../image/records-database.png';
import project10 from '../image/project10.png';
import python12 from '../image/python-project12.png';

class Projects extends Component {
  render() {
    return (
      <section id="Projects">
        <div className="projectContainer">
          <div className="main-title">
            <h2>Projects</h2>
            <p className="project-p">Please check out my projects!</p>
          </div>
          <div className="project-container">
            <div className="projectPhoto" style={{background: `url(${recordsDatabase}) no-repeat`, backgroundSize: '450px 280px'}}>
            </div>
            <div className="projectCopy">
              <h3>Records Database</h3>
              <h5>JavaScript / Sqlite / HTML / CSS</h5>
              <div className="copy">
                <h6>Save and search your records! <br></br>
                  SQL based app that has CRUD operation and session based authentication.
                </h6>
              </div>
              <div className="projectButton">
                <button className="button">GitHub</button>
                <button className="button">Live Demo</button>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="projectCopy-left">
              <h3>REST API with React</h3>
              <h5>MongoDB / React / Node / Express</h5>
              <div className="copy">
                <h6>App with React and a REST API. <br></br>
                  User can sign in and find, create, update, delete courses.
                </h6>
              </div>
              <div className="projectButton">
                <button className="button">GitHub</button>
                <button className="button">Live Demo</button>
              </div>
            </div>
            <div className="projectPhoto-right" style={{background: `url(${project10}) no-repeat`, backgroundSize: '400px 250px'}}>
            </div>
          </div>
          <div className="project-container">
            <div className="projectPhoto" style={{background: `url(${python12}) no-repeat`, backgroundSize: '450px 280px'}}>
            </div>
            <div className="projectCopy">
              <h3>Records Database</h3>
              <h5>Python / Django / Sqlite</h5>
              <div className="copy">
                <h6>
                  A site where people can sign up to find projects that <br></br>
                  need help or post their own projects for other people to join.
                </h6>
              </div>
              <div className="projectButton">
                <button className="button">GitHub</button>
                <button className="button">Live Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
