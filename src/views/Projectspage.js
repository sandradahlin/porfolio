import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { projectsData } from "../staticData";

const Projectpage = () => {
    const renderContent = () => {
        return (
            <>
                <section className="projects-page">
                    <Fade>
                        <div className="row">
                            <div className="box-background-dark text-box-left">
                                <h2 className="heading-secondary">Projects</h2>
                                <p className="paragraph">
                                    Below are some of the projects I built
                                    during my free time.{" "}
                                </p>
                                <p className="paragraph u-margin-bottom-medium ">
                                    To see the projects I built as a part of my
                                    school programme check out my github page.
                                </p>
                                <a
                                    href="https://github.com/sandra-td"
                                    className="btn-ghost-dark"
                                >
                                    SEE GITHUB
                                </a>
                            </div>
                        </div>
                    </Fade>
                </section>

                <section className="section-movie-app">
                    <Fade>
                        <div className="row ">
                            <div className="col-1-of-2 text-box-right u-margin-top-big">
                                <h2 className="heading-secondary text-white">
                                    {projectsData[2].name}
                                </h2>
                                <p className="paragraph text-white u-margin-bottom-medium">
                                    {projectsData[2].desc}
                                </p>
                                <Link
                                    to={`/projects/${projectsData[2].id}`}
                                    className="btn-ghost-white"
                                >
                                    SEE MORE
                                </Link>
                            </div>
                        </div>
                    </Fade>
                </section>
                <section className="section-hawaii ">
                    <Fade>
                        <div className="row">
                            <div className="col-1-of-2 text-box-left u-margin-top-large">
                                <h2 className="heading-secondary ">
                                    {" "}
                                    {projectsData[0].name}
                                </h2>
                                <p className="paragraph u-margin-bottom-medium">
                                    {projectsData[0].desc}
                                </p>
                                <Link
                                    to={`/projects/${projectsData[0].id}`}
                                    className="btn-ghost-dark"
                                >
                                    SEE MORE
                                </Link>
                            </div>
                        </div>
                    </Fade>
                </section>
                <section className="section-mindful ">
                    <Fade>
                        <div className="row">
                            <div>
                                <div className="col-1-of-2 text-box-right u-margin-top-big">
                                    <h2 className="heading-secondary text-white">
                                        {projectsData[1].name}
                                    </h2>
                                    <p className="paragraph text-white u-margin-bottom-medium">
                                        {projectsData[1].desc}
                                    </p>
                                    <Link
                                        to={`/projects/${projectsData[1].id}`}
                                        className="btn-ghost-white"
                                    >
                                        SEE MORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>
                <section className="section-contacts-app">
                    <Fade>
                        <div className="row">
                            <div className="col-1-of-2 text-box-left u-margin-top-large">
                                <h2 className="heading-secondary ">
                                    {" "}
                                    {projectsData[3].name}
                                </h2>
                                <p className="paragraph u-margin-bottom-medium">
                                    {projectsData[3].desc}
                                </p>
                                <Link
                                    to={`/projects/${projectsData[3].id}`}
                                    className="btn-ghost-dark"
                                >
                                    SEE MORE
                                </Link>
                            </div>
                        </div>
                    </Fade>
                </section>
            </>
        );
    };

    return <>{renderContent()}</>;
};

export default Projectpage;
