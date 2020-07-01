import React, { Suspense } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import HomeIntro from "../components/HomeIntro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Homepage = () => {
    const override = css`
        position: absolute;
        top: 40%;
        left: 45%;
        transform: translate(-50%, -50%);
    `;
    const renderContent = () => {
        return (
            <>
                <HomeIntro />
                <AboutMe />
                <Skills />
                <Projects />
            </>
        );
    };
    return (
        <Suspense
            fallback={
                <ClipLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={true}
                />
            }
        >
            {renderContent()}
        </Suspense>
    );
};

export default Homepage;
