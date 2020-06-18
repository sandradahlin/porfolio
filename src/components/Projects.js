import React from "react";
import { Link } from "react-router-dom";
import projectsImage from "../img/projects.png";
const Projects = () => {
    return (
        <section className="section-projects">
            <div className="row align-center">
                <h3 className="heading-tertiary">Projects</h3>
                <img src={projectsImage} className="u-margin-bottom-big "></img>
                <Link to="/projects">
                    <span className="btn-full-beige">SEE MORE</span>
                </Link>
            </div>
        </section>
    );
};

export default Projects;
