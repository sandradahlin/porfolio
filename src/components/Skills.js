import React from "react";
import reduxLogo from "../img/redux.png";
import mongoLogo from "../img/mongoLogo.png";

const Skills = () => {
    return (
        <section className="section-skills" id="skills">
            <div className="row align">
                <div className="col-1-of-2">
                    <div className="box-background-light">
                        <h3 className="heading-tertiary">Skills</h3>
                        <p className="paragraph  ">
                            So far I have mostly worked with front end, but I
                            enjoy backend as much and am willing to learn.{" "}
                            <br />I have worked with JavaScript, HTML, CSS,
                            React.js, Redux, Context API, MongoDB, Git/Github
                            and a little bit of Node.js. I learn new skills
                            quickly and I am always enthusiastic about trying
                            out new solutions, frameworks, or principles.
                        </p>
                        <p className="paragraph u-margin-bottom-medium">
                            You can check out my CV on LinkedIn.
                        </p>
                        <a href="" className="btn-ghost-dark">
                            OPEN LINKEDIN
                        </a>
                    </div>
                </div>
                <div className="col-2-of-2 section-skills__skill-box">
                    <ul className="skill-icons u-margin-bottom-medium">
                        <li>
                            <i class="fab fa-html5"></i>
                            <p>HTML 5</p>
                        </li>
                        <li>
                            <i class="fab fa-css3-alt"></i>
                            <p>CSS 3</p>
                        </li>
                        <li>
                            <i class="fab fa-js"></i>
                            <p>JavaScript</p>
                        </li>
                    </ul>
                    <ul className="skill-icons u-margin-bottom-medium">
                        <li>
                            <i class="fab fa-react"></i>
                            <p>React</p>
                        </li>
                        <li>
                            <img className="logo-img" src={reduxLogo}></img>
                            <p>Redux</p>
                        </li>
                        <li>
                            <i class="fab fa-git-alt"></i>
                            <p>Git</p>
                        </li>
                    </ul>
                    <ul className="skill-icons-small">
                        <li>
                            <img
                                className="logo-img-small"
                                src={mongoLogo}
                            ></img>
                            <p>MongoDB</p>
                        </li>
                        <li>
                            <i class="fab fa-node"></i>
                            <p>NodeJS</p>
                        </li>
                        <li>
                            <i class="fab fa-sass"></i>
                            <p>Sass</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
