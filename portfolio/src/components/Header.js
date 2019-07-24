import React, { Component } from 'react';
import '../css/Header.css';
import sunset from '../image/sunset-2.jpg';

const myStyle = {
  backgroundImage : `url(${sunset})` ,
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
