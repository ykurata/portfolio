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
            <p className="about-me">Hi I'm Yasuko Kurata, web developer who's looking for an opportunity to join a great team!<br></br>
              I learned my coding skills from the online tech school <a href="https://teamtreehouse.com">Team Treehouse</a> where I completed both the &nbsp;
              <strong>Full Stack Javascript Techdegree</strong> and the <strong>Python Web Development Techdegree</strong>.<br></br>
              I'm experienced in using various languages and frameworks such as HTML, CSS, Javascript, JQuery, NodeJS, Python and Django,
              along with understanding of relational and non-relational databases.<br></br>
              I continue to learn new skills on my own but I'm also eager to learn from other as a member of a passionate team and would love to
              use my abilities to help a company and team grow.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
