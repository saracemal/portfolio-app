import React from "react";
// import styled from "styled-components";
import HomeNav from "./HomeNav"
import Footer from "./Footer"
import InfoSection from "./InfoSection"
import Skills from "./Skills"

function HomePage() {
    return (
        <div>
        <HomeNav />
            <h1>Home Page!</h1>
        <InfoSection />
        <Skills />
        <Footer />
        </div>
    )
}

export default HomePage;
