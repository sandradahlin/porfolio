import React from "react";
import HomeIntro from "../components/HomeIntro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Homepage = () => {
    return (
        <>
            <HomeIntro />
            <AboutMe />
            <Skills />
            <Projects />
        </>
    );
};

export default Homepage;
