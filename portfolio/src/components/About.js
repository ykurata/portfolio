import React, { Component } from 'react';
import '../css/About.css';
import profilePhoto from '../image/profile-photo.jpg';

class About extends Component {
  render(){
    return (
      <section id="About">
        <div className="row">
          <div className="image-container">
            <img className="profile-pic" src={profilePhoto} alt="profile photo"></img>
          </div>
          <div className="about-container">
            <h1>About Me</h1>
            <p>Corned beef andouille ribeye burgdoggen jowl brisket landjaeger frankfurter alcatra.
              Brisket pork chop beef ribs, tri-tip swine salami ham hock kevin spare ribs andouille ball tip cupim.
              Pig fatback cupim, rump tail pork loin flank tri-tip pork belly ball tip meatloaf leberkas beef ribs sausage kielbasa.
              Cupim landjaeger chuck turducken. Sirloin capicola swine, jerky bresaola spare ribs jowl.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
