import React, { useState, useEffect } from "react";
import ProjectIntro from "../components/ProjectIntro";
import ProjectImageLeft from "../components/ProjectImageLeft";
import ProjectDesign from "../components/ProjectDesign";
import bgImg from "../img/movieAppCover.jpg";
import Navbar from "../components/NavbarOtherPages";
import OtherProjects from "../components/OtherProjects";
import { projectsData } from "../staticData";

const Project = () => {
    const [project, setProject] = useState({
        bgImg: "",
        projectName: "",
        projectPurpose: "",
        projectIntro: ""
    });

    useEffect(() => {
        console.log(projectsData);
        setProject({
            bgImg,
            projectName: "Weddings Hawaii",
            projectPurpose: "Student Project",
            projectIntro: "lorem"
        });
    }, []);

    //@todo sen an id on click from projectspage to a certain project and filter out
    //the projects to be shown
    // const renderProjects = () => {
    //     projectsData.map(project => {
    //         return(

    //         )
    //     })
    // }

    return (
        <React.Fragment>
            <Navbar />
            <ProjectIntro />
            <ProjectImageLeft />
            <ProjectDesign />
            <OtherProjects />
        </React.Fragment>
    );
};
//add component with links to other projects

export default Project;
