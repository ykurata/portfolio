import React, { Component } from 'react';
import { Button, Card, CardText, CardTitle, CardActions } from 'react-mdl';
import '../css/Projects.css';
import recordsDatabase from '../image/records-database.png';
import project10 from '../image/project10.png';
import python12 from '../image/python-project12.png';

class Projects extends Component {
  render() {
    return (
      <section id="Project">
        <div className="container">
          <div className="main-title">
            <h2>Projects</h2>
            <p className="project-p">Please check out my projects!</p>
          </div>
          <div className="project-container">
            <div className="projectPhoto-left" style={{background: `url(${recordsDatabase}) no-repeat`, backgroundSize: '450px 280px'}}>
            </div>
            <div className="projectCopy-right">
              <h3>Records Database</h3>
              <h5>JavaScript / Sqlite / HTML / CSS</h5>
              <div class="copy">
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
              <div class="copy">
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
            <div className="projectPhoto-left" style={{background: `url(${python12}) no-repeat`, backgroundSize: '450px 280px'}}>
            </div>
            <div className="projectCopy-right">
              <h3>Records Database</h3>
              <h5>Python / Django / Sqlite</h5>
              <div class="copy">
                <h6>
                  A site where people can sign up to find projects.<br></br>
                  that need help or post their own projects for other people to join.
                </h6>
              </div>
              <div className="projectButton">
                <button className="button">GitHub</button>
                <button className="button">Live Demo</button>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col">
              <Card shadow={5} style={{width: '320px', height: '360px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: `url(${recordsDatabase}) bottom right 15% no-repeat`, backgroundSize: '320px 200px' }}></CardTitle>
                  <CardText>
                      <strong>JavaScript, Sqlite, HTML, CSS</strong><br></br>
                      Save and search your records!
                      SQL based app that has CRUD operation and session based authentication.

                  </CardText>
                  <CardActions border>
                      <a href="https://github.com/ykurata/SQL-records-database"><Button colored>GitHub</Button></a>
                      <Button colored style={{ float: 'right'}}>Live Demo</Button>
                  </CardActions>
              </Card>
            </div>
            <div className="col">
              <Card shadow={5} style={{width: '320px', height: '360px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: `url(${project10}) bottom right 15% no-repeat`, backgroundSize: '320px 201px' }}></CardTitle>
                  <CardText>
                      <strong>MongoDB, React, Node, Express</strong><br></br>
                      App with React and a REST API.<br></br>
                      User can sign in and find, create, update, delete courses.
                  </CardText>
                  <CardActions border>
                      <a href="https://github.com/ykurata/FSJS-techdegree-project-10"><Button colored>GitHub</Button></a>
                      <Button colored style={{ float: 'right'}}>Live Demo</Button>
                  </CardActions>
              </Card>
            </div>
            <div className="col">
              <Card shadow={5} style={{width: '320px', height: '360px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: `url(${python12}) bottom right 15% no-repeat`, backgroundSize: '320px 201px' }}></CardTitle>
                  <CardText>
                      <strong>Python, django, Sqlite</strong><br></br>
                      A site where people can sign up to find projects
                      that need help or post their own projects for other people to join.
                  </CardText>
                  <CardActions border>
                      <a href="https://github.com/ykurata/techdegree-project-12"><Button colored>GitHub</Button></a>
                      <Button colored style={{ float: 'right'}}>Live Demo</Button>
                  </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
