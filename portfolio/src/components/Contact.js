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
            {/* <span className="email-icon">
              <i className="far fa-envelope"></i>
            </span> */}
            <div className="emailaddress">
              <p className="info-text">yasukokurata@gmail.com</p>
            </div>

            <div className="links-div">
              <a href="https://www.linkedin.com/in/yasuko-kurata/">
                <span className="icon-link">
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
              <a href="https://github.com/ykurata">
                <span className="icon-link">
                  <i class="fab fa-github"></i>
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
