import React, { Component } from 'react';
// import Background from '../image/laptop-photo-2.jpg';
import Sunset from '../image/sunset.jpg';
import '../css/Header.css';

const myStyle = {
  backgroundImage : `url(${Sunset})` ,
  backgroundSize: 'cover',
  height: '100vh',

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
