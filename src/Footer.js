import React from "react";
import styled from "styled-components";
import gitImage from '../footerimages/github.png'
import linkedinImage from '../footerimages/linkedin.png'

function Footer() {
    return (
        <Wrapper>
            <Text>created with 💟  by <a href="linkedin.com/saracemal">Sara Cemal</a></Text>
            <a href="https://www.linkedin.com/in/saracemal">
            <img src={linkedinImage} alt="linkedin.com" width="100" height="132"/>
            </a> & 
            <a href="https://www.github.com/saracemal">
            <img src={gitImage} alt="github.com" width="100" height="132"/>
            </a>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    text-align: center;
`

const Text = styled.p`
    font-family: 'Space Mono', monospace;
    
`


