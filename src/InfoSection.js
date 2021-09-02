import React from "react";
import styled, { keyframes } from 'styled-components';
import { bounce , fadeIn } from 'react-animations';


// add padding
// add resume link 

    
function InfoSection() {
    return (
        <Container>
            <BouncyDiv><h1>hello! I'm Sara Cemal, a full-stack software engineer based in NYC 🌃</h1></BouncyDiv>
            <FadeInDiv>
                <p>What do sociology, neuroscience, and coding have in common? The ability to critically think, analyze, and problem solve until you reach the root of the problem. I enjoy combining my background into passion projects, the best part being that I can create these applications all on my own! </p>
                <p>Fun facts: I will beat you in a game of Geoguessr, I've created the perfect capsule wardrobe, my YouTube recommended page consists mainly of travel vloggers and tiny desk concerts, and I will always ask for extra spice on my food.</p>
                <p>looking to connect? find me on <a href="linkedin.com/saracemal">LinkedIn</a></p>

            </FadeInDiv>
        </Container>
    )
}

export default InfoSection;

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
  text-align: center;
    font-family: 'Kosugi Maru', sans-serif;
`;

const FadeInAnimation = keyframes`${FadeIn}`;

const FadeInDiv = styled.div`
    animation: infinite 2s ${FadeInAnimation};
`;

const Container = styled.div`
    border-style: none;
    height: 500px;
    width: 500px;
`;

const Info = styled.div`
    text-align: center;
    font-family: 'Space Mono', monospace;
    background: rgba( 184, 233, 134, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    width: 1200px;
    border-radius: 10px;
`;



