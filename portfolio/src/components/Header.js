import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../css/Header.css';
import sunset from '../image/sunset-2.jpg';

// const myStyle = {
//   backgroundImage : `url(${sunset})` ,
//   backgroundSize: 'cover',
//   height: '100vh',

// }

class Header extends Component {
  render() {
    return (
      <div id="Home">
        <Image src={sunset} fluid />
      </div>
      
    )
  }
}

export default Header;
