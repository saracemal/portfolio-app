import React from "react";
import './NavBar.css';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




// find photos for the links 
function HomeNav({sticky}) {
    return (
    //     <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    //     <div className="navbar--logo-holder">
    //     {sticky ? <H1>sara cemal 🐞</H1> : null}
    //     <H1>sara cemal 🐞</H1>
    //     </div>
    //     <ul className="navbar--link">
    //     <li className="navbar--link-item">LinkedIn</li>
    //     <li className="navbar--link-item">Github</li>
    //     <li className="navbar--link-item">Medium</li>
    //     <li className="navbar--link-item">Resume</li>
    //     </ul>
    // </nav>

        <Navbar bg="light" expand="lg">
        <Navbar.Brand><H1>sara cemal 🐞</H1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">resume</Nav.Link>
            <Nav.Link href="linkedin.com/in/saracemal">linkedin</Nav.Link>
            <Nav.Link href="github.com/saracemal">github</Nav.Link>
            <Nav.Link href="saracemal.medium.com">medium</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default HomeNav;

const H1 = styled.h1`
font-family: 'Kosugi Maru', sans-serif;
`
