import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Skills">Skills</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
  }
}

export default Navigation;
