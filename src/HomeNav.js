import React from "react";
import Navbar from 'react-bootstrap/Navbar'

function HomeNav() {
    return (
        <Navbar sticky="top" >
            <Navbar.Brand href="/">Sara Cemal</Navbar.Brand>
            <ul className="navbar--link">
            <li className="navbar--link-item" href="https://www.linkedin.com/in/saracemal">LinkedIn</li>
            <li className="navbar--link-item" href="https://github.com/saracemal">GitHub</li>
            <li className="navbar--link-item" href="https://saracemal.medium.com">Medium</li>
            <li className="navbar--link-item" href="/resume">Resume</li>
            </ul>
        </Navbar>
    )
}

export default HomeNav;