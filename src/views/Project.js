import React, { useState, useEffect } from "react";
import ProjectIntro from "../components/ProjectIntro";
import ProjectImageLeft from "../components/ProjectImageLeft";
import ProjectDesign from "../components/ProjectDesign";
import bgImg from "../img/meditationCover.jpg";
import Navbar from "../components/NavbarOtherPages";
import OtherProjects from "../components/OtherProjects";

const Project = () => {
    const [project, setProject] = useState({
        bgImg: "",
        projectName: "",
        projectPurpose: "",
        projectIntro: ""
    });

    useEffect(() => {
        setProject({
            bgImg,
            projectName: "Weddings Hawaii",
            projectPurpose: "Student Project",
            projectIntro: "lorem"
        });
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <ProjectIntro project={project} />
            <ProjectImageLeft />
            <ProjectDesign />
            <OtherProjects />
        </>
    );
};
//add component with links to other projects

export default Project;
