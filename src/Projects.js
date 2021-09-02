import React from "react";
import styled from "styled-components";

function Projects() {
    //insert fetch function here to grab projects

    return (
        <Container>
            <H3>projects:</H3>
        </Container>

    )
}

const Container = styled.div`
    background: rgba( 74, 144, 226, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.0px );
    -webkit-backdrop-filter: blur( 3.0px );
    border-radius: 10px;
    width: 1200px;
`

const H3 = styled.h3`
    text-align: center;
    font-family: 'Kosugi Maru', sans-serif;
`



export default Projects;