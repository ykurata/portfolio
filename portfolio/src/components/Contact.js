import React, { Component } from 'react';
import '../css/Contact.css';


class Contact extends Component {
  render() {
    return (
      <section id="Contact">
        <div className="contact-container">
          <div className="main-title">
            <h2 className="contact-title">Contact</h2>
          </div>
          <div className="info-container">
            <div className="emailaddress">
              <p className="info-text">yasukokurata@gmail.com</p>
            </div>

            <div className="links-div">
              <a className="icon" href="https://www.linkedin.com/in/yasuko-kurata/">
                <span className="icon-link">
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
              <a className="icon" href="https://github.com/ykurata">
                <span className="icon-link">
                  <i className="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
