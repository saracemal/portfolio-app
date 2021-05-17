import React from "react";
import styled from 'styled-components';


function InfoSection() {
    return (
        <Container>
            <H1>hello! I'm Sara Cemal, a full-stack software engineer based in NYC</H1>
            <Info>
                <p>What do sociology, neuroscience, and coding have in common? The ability to critically think, analyze, and problem solve until you reach the root of the problem. I enjoy combining my background into passion projects, the best part being that I can create these applications all on my own! </p>
                <p>Fun facts: I will beat you in a game of Geoguessr, I've created the perfect capsule wardrobe, my YouTube recommended page consists mainly of travel vloggers and tiny desk concerts, and I will always ask for extra spice on my food.</p>
            </Info>
        </Container>
    )
}

export default InfoSection;

const Container = styled.div`
    
`

const Info = styled.div`
    text-align: center;
    font-family: 'Space Mono', monospace;
    background: rgba( 184, 233, 134, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    width: 1200px;
    border-radius: 10px;
`

const H1 = styled.h1`
    text-align: center;
    font-family: 'Kosugi Maru', sans-serif;
`

