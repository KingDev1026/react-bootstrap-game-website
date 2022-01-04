import React from 'react';
import './Header.css';  
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../assets/img/Logo_LepreCons_Finales.png';

function Header() {
  return (
    <div className="Header">
        <Navbar collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href=""><img src={Logo} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="">ABOUT</Nav.Link>
                      <Nav.Link href="">LORE</Nav.Link>
                      <Nav.Link href="">FEATURE</Nav.Link>
                    
                      <Nav.Link href="">FOADMAP</Nav.Link>
                      <Nav.Link href="">TEAM</Nav.Link>
                      <Nav.Link href="">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <a className='join-discord'>JOIN DISCORD</a>
            </Container>
        </Navbar>
    </div>
  );
}

export default Header;
