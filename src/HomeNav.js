import React from "react";
import './NavBar.css'
import styled from 'styled-components'


// find photos for the links 
function HomeNav({sticky}) {
    return (
        <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
        {sticky ? <H1>sara cemal 🐞</H1> : null}
        <H1>sara cemal 🐞</H1>
        </div>
        <ul className="navbar--link">
        <li className="navbar--link-item">LinkedIn</li>
        <li className="navbar--link-item">Github</li>
        <li className="navbar--link-item">Medium</li>
        <li className="navbar--link-item">Resume</li>
        </ul>
    </nav>
    )
}

export default HomeNav;

const H1 = styled.h1`
font-family: 'Kosugi Maru', sans-serif;
`
