import React from "react";
import styled from "styled-components";

// adding icons? 
//add button links to skills here 
//add photo folder on the side with links to the buttons

function Skills() {
    return (
        <Container>
        <H3>skills:</H3>
    
        </Container>
    )
}

export default Skills;

const H3 = styled.h3`
    text-align: center;
    font-family: 'Kosugi Maru', sans-serif;
`

const Container = styled.div`
    background: rgba( 144, 19, 254, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.0px );
    -webkit-backdrop-filter: blur( 3.0px );
    border-radius: 10px;
    width: 1200px;
`

