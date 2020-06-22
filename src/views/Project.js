import React, { useState, useEffect } from "react";
import ProjectIntro from "../components/ProjectIntro";
import ProjectImageLeft from "../components/ProjectImageLeft";
import ProjectDesign from "../components/ProjectDesign";
import Navbar from "../components/NavbarOtherPages";
import OtherProjects from "../components/OtherProjects";
import { projectsData } from "../staticData";
import { render } from "@testing-library/react";

const Project = (props) => {
    const [project, setProject] = useState({
        bgImg: "",
        name: "",
        client: "",
        textColorIntro: "",
        desc: "",
        tech: "",
        link: "",
        designIntro: "",
        designTypographyImg: "",
        designColorsImg: "",
        textColorIntro: "",
        sliderImages: []
    });

    useEffect(() => {
        const id = props.match.params.id;
        const filtered = { ...projectsData.filter((par) => par.id == id) };
        const projectToShow = filtered[0];

        setProject({
            bgImg: projectToShow.bgImg,
            name: projectToShow.name,
            client: "Student Project",
            textColorIntro: projectToShow.textColorIntro,
            desc: projectToShow.desc,
            tech: projectToShow.tech,
            link: projectToShow.link,
            designIntro: projectToShow.designIntro,
            designTypographyImg: projectToShow.designTypographyImg,
            designColorsImg: projectToShow.designColorsImg,
            textColorIntro: projectToShow.textColorIntro,
            sliderImages: projectToShow.sliderImages
        });
    }, [props.match.params.id]);

    const renderComponents = () => {
        if (project) {
            return (
                <>
                    <ProjectIntro
                        project={project}
                        id={props.match.params.id}
                    />
                    <ProjectImageLeft
                        desc={project.tech}
                        img={project.sliderImages}
                    />
                    <ProjectDesign
                        id={props.match.params.id}
                        designintro={project.designIntro}
                        typo={project.designTypographyImg}
                        colors={project.designColorsImg}
                    />
                    <OtherProjects name={project.name} />
                </>
            );
        }
    };

    return <React.Fragment>{renderComponents()}</React.Fragment>;
};
//add component with links to other projects

export default Project;
