import React, { Component } from 'react';
import Background from '../image/laptop-photo-2.jpg';
import '../css/Header.css';

const myStyle = {
  backgroundImage : `url(${Background})`,
  backgroundSize: 'cover',
  height: '70vh',
}

class Header extends Component {
  render() {
    return (
      <header id="Home" style={myStyle}>
        <h1>{this.props.title}</h1>
        <p>Web developer who's passionate about coding!</p>
      </header>
    )
  }
}

export default Header;
