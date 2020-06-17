import React from "react";
import HomeIntro from "../components/HomeIntro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Projects from "../components/Projects";

const Homepage = () => {
    return (
        <>
            <HomeIntro />
            <AboutMe />
            <Skills />
            <Resume />
            <Projects />
        </>
    );
};

export default Homepage;
