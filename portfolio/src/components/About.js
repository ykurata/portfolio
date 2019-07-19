import React, { Component } from 'react';
import '../css/About.css';
import profilePhoto from '../image/profile-photo.jpg';

class About extends Component {
  render(){
    return (
      <section id="About">
        <div className="about-container">
          <div className="image-container">
            <img className="profile-pic" src={profilePhoto} alt="profile"></img>
          </div>
          <div className="about-text-container">
            <h2>About Me</h2>
            <p className="about-me">Hi, I'm Yasuko Kurata, web developer who's looking for a opportunity to join a great team!<br></br>
              I learned coding skills from online tech school called Team Treehouse. I completed two techdegrees,
              <strong>Full Stack Javascript Techdegree</strong> and <strong>Python Web Development Techdegree</strong> which are Team Treehouse's online leanring programs.<br></br>
              I'm familiar with front end langages and back end languages, such as HTML, CSS, Javascript, JQuery, NodeJS, and Python.<br></br>
              I'm fast learner, eager to learn new skills, and great team player.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
