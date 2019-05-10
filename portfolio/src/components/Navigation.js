import React, { Component } from 'react';
import '../css/Navigation.css';

class Navigation extends Component {
  render() {
    const sections = ["Home", "About", "Skills", "Project", "Contact"];
    const navLinks = sections.map( (section, i) => {
      return (
        <li key={i}><a href={section}>{section}</a></li>
      );
    });
    return (
      <nav>
        <h2 className="header-logo">{this.props.title}</h2>
        <ul>
          {navLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
