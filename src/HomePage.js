import React from "react";
// import styled from "styled-components";
import Footer from "./Footer"
import InfoSection from "./InfoSection"
import Skills from "./Skills"
import ProjectPage from "./ProjectPage"

function HomePage() {
    return (
        <div>
            <InfoSection />
            <Skills />
            <ProjectPage />
            <Footer />
        </div>
    )
}

export default HomePage;
