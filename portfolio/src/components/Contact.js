import React, { Component } from 'react';
import '../css/Contact.css';


class Contact extends Component {
  render() {
    return (
      <section id="Contact">
        <div className="container">
          <div className="main-title">
            <h2>Contact</h2>
          </div>
          <div className="info-container">
            <ul>
              <li>
                <span className="icon">
                  <i className="far fa-envelope"></i>
                </span>
                <span className="text">
                  <p className="info-text">yasukokurata@gmail.com</p>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="text">
                  <p className="info-text">647-785-1164</p>
                </span>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yasuko-kurata/">
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  <span className="text">
                    <p className="info-text">LinkedIn</p>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
