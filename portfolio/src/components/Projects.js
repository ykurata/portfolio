import React, { Component } from 'react';
import '../css/Projects.css';

class Projects extends Component {
  render() {
    return (
      <section id="Projects">
        <div className="container">
          <div className="main-title">
            <h2>Projects</h2>
            <p>Please check out my projects!</p>
          </div>
          <div className="project-container">
            <div className="project-photo-sitter">
            </div>
            <div className="projectCopy">
              <h3 className="project-title">Loving Sitter</h3>
              <h5>MongoDB / NodeJS / Express / React</h5>
              <div className="copy">
                <h6>
                  <b>Hatchways Project-Based Development Course's project<br></br></b>
                  This application is for dog owners who need to find a dog sitter, <br></br>
                  and dog sitters. <br></br>
                  The app allows dog owners to find dog sitters 
                  by viewing profiles and sending messages to potential sitters.
                </h6>
              </div>
              <div className="projectButton">
                <a href="https://github.com/ykurata/Loving-Sitter" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://hatchways-loving-sitter.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="button">Live Demo</button></a>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="projectCopy-left">
              <h3 className="project-title">Records Database</h3>
              <h5>NodeJS / Sqlite / HTML / CSS</h5>
              <div className="copy">
                <h6>This application is for the music and record lovers. Great for storing and searching your record collection! <br></br>
                  SQL based app that helps you to save your record data.
                  Session based authentication, and CRUD operations.
                </h6>
              </div>
              <div className="projectButton">
                <a href="https://github.com/ykurata/SQL-records-database" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://sql-records-database.herokuapp.com" target="_blank" rel="noopener noreferrer"><button className="button">Live Demo</button></a>
              </div>
            </div>
            <div className="project-photo-records">
            </div>
          </div>
          <div className="project-container">
            <div className="project-photo-project10">
            </div>
            <div className="projectCopy">
              <h3 className="project-title">REST API with React</h3>
              <h5>MongoDB / NodeJS / Express / React</h5>
              <div className="copy">
                <h6>A React app with and a REST API and Express. <br></br>
                  Team Treehouse Full Stack JavaScript Techdegree's 10th projecct.
                  An app that users can find courses.
                  User can create an account and find, create, update, delete courses.
                </h6>
              </div>
              <div className="projectButton">
                <a href="https://github.com/ykurata/FSJS-techdegree-project-10" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://fsjs-techdegree-10.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="button">Live Demo</button></a>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="projectCopy-left">
              <h3 className="project-title">Social Network with Django</h3>
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
                <a href="https://github.com/ykurata/techdegree-project-12" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://python-techdegree-12.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="button">Live Demo</button></a>
              </div>
            </div>
            <div className="project-photo-python12">
            </div>
          </div>
          <div className="project-container">
            <div className="project-photo-birthday">
            </div>
            <div className="projectCopy">
              <h3 className="project-title">Birthday Reminder</h3>
              <h5>Python / Django / Sqlite</h5>
              <div className="copy">
                <h6>An app that helps you remember your friends birthdays by showing a reminder on the page. <br></br>
                  User can login and save, edit or delete birthdays you don't want to forget.
                  Display a notification on the day of your friends or families birthday so you no longer have to check facebook.
                </h6>
              </div>
              <div className="projectButton">
                <a href="https://github.com/ykurata/Birthday-reminder" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://python-birthday-reminder.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="button">Live Demo</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
