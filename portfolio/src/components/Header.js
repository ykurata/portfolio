import React, { Component } from 'react';
import {ResponsiveEmbed, Image}from 'react-bootstrap';
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
      <div id="Home" style={{ width: '100%', height: '100vh'}}>
        <ResponsiveEmbed aspectRatio='16by9'>
            <Image src={sunset} responseive='true'/>
        </ResponsiveEmbed>
      </div>
      
    )
  }
}

export default Header;
