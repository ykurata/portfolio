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
            <p>Please check out my projects!</p>
          </div>
          <div className="row">
            <div className="col">
              <Card shadow={5} style={{width: '320px', height: '340px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: `url(${recordsDatabase}) bottom right 15% no-repeat #46B6AC`, backgroundSize: '320px 200px' }}></CardTitle>
                  <CardText>
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
              <Card shadow={5} style={{width: '320px', height: '340px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: `url(${project10}) bottom right 15% no-repeat #46B6AC`, backgroundSize: '320px 201px' }}></CardTitle>
                  <CardText>
                      MongoDB, React, Node and Express(MERN) app.
                      It has CRUD operation and user authentication.
                  </CardText>
                  <CardActions border>
                      <a href="https://github.com/ykurata/FSJS-techdegree-project-10"><Button colored>GitHub</Button></a>
                  </CardActions>
              </Card>
            </div>
            <div className="col">
              <Card shadow={5} style={{width: '320px', height: '340px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: `url(${python12}) bottom right 15% no-repeat #46B6AC`, backgroundSize: '320px 201px' }}></CardTitle>
                  <CardText>
                      Python project. A site where people can sign up to find projects
                      that need help or post their own projects for other people to join.
                  </CardText>
                  <CardActions border>
                      <a href="https://github.com/ykurata/techdegree-project-12"><Button colored>GitHub</Button></a>
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
