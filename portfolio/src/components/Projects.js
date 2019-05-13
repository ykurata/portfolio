import React, { Component } from 'react';
import { Button, Card, CardText, CardTitle, CardActions } from 'react-mdl';
import '../css/Projects.css';
import projectPhoto1 from '../image/project0-landscape-1.png';

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
              <Card shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: `url(${projectPhoto1}) bottom right 15% no-repeat #46B6AC`, backgroundSize: '325px' }}></CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenan convallis.
                  </CardText>
                  <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored style={{ float: 'right'}}>Live Demo</Button>
                  </CardActions>
              </Card>
            </div>
            <div className="col">
              <Card shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenan convallis.
                  </CardText>
                  <CardActions border>
                      <Button colored>View Updates</Button>
                  </CardActions>
              </Card>
            </div>
            <div className="col">
              <Card shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenan convallis.
                  </CardText>
                  <CardActions border>
                      <Button colored>View Updates</Button>
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
