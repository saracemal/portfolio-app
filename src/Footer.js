import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <Wrapper>
            <Text>created with 💟 by <a href="linkedin.com/saracemal">Sara Cemal</a></Text>
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


