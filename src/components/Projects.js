import React from "react";
import { Link } from "react-router-dom";
import projectsImage from "../img/projects.png";
import Fade from "react-reveal/Fade";

const Projects = () => {
    return (
        <Fade>
            <section className="section-projects">
                <div className="row align-center">
                    <h3 className="heading-tertiary">Projects</h3>
                    <img
                        src={projectsImage}
                        className="u-margin-bottom-big "
                    ></img>
                    <Link to="/projects">
                        <span className="btn-ghost-dark">SEE MORE</span>
                    </Link>
                </div>
            </section>
        </Fade>
    );
};

export default Projects;
