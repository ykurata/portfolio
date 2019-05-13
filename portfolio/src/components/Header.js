import React, { Component } from 'react';
import Background from '../image/laptop.jpg';
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
        <p>I'm yasuko kurata, nice to meet you!</p>
      </header>
    )
  }
}

export default Header;
