import React from "react";
// import styled from "styled-components";
import HomeNav from "./HomeNav"
import Footer from "./Footer"
import InfoSection from "./InfoSection"
import Skills from "./Skills"
import ProjectPage from "./ProjectPage"

function HomePage() {
    return (
        <div>
        <HomeNav />
        <InfoSection />
        <Skills />
        <ProjectPage />
        <Footer />
        </div>
    )
}

export default HomePage;
