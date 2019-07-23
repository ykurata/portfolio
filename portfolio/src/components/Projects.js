import React, { Component } from 'react';
import '../css/Projects.css';
import recordsDatabase from '../image/records-database.png';
import project10 from '../image/project10.png';
import python12 from '../image/python-project12.png';
import birthday from '../image/birthday-reminder.png';

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
                  SQL based app that helps you to save your records data.
                  Session based authentication, and CRUD operations.
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
                <h6>An app with React and a REST API with Express. <br></br>
                  Team Treehouse Full Stack JavaScript Techdegree's 10th projecct.
                  An app that users can find courses.
                  User can create an account and find, create, update, delete courses.
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
              <h3>Social Network with Django</h3>
              <h5>Python / Django / Sqlite</h5>
              <div className="copy">
                <h6>
                  Team Treehouse Python Web Development Techdegree 12th project.<br></br>
                  A site where people can sign up to find projects that 
                  need help or post their own projects for other people to join.<br></br>
                  You can accept or refuse applications applied for projects you posted.
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
              <h3>Birthday Reminder</h3>
              <h5>Python / Django / Sqlite</h5>
              <div className="copy">
                <h6>An app that helps you to remember and remind your friends birthdays. <br></br>
                  User can login and save, edit or delete birthdays you don't want to forget.
                  There is a notification displayed when someone's birthday is coming.
                </h6>
              </div>
              <div className="projectButton">
                <button className="button">GitHub</button>
                <button className="button">Live Demo</button>
              </div>
            </div>
            <div className="projectPhoto-right" style={{background: `url(${birthday}) no-repeat`, backgroundSize: '430px 260px'}}>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
