import React from "react";
import profileImg from "../img/profileimg.jpg";
import Navbar from "./Navbar";

const HomeIntro = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="header__intro-box box-background-light">
                <img className="header__profile-pic" src={profileImg}></img>
                <div className="header__content-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">
                            Hi! I'm Aleksandra
                        </span>
                        <span className="heading-primary--sub">
                            Frontend Web Developer |
                        </span>
                    </h1>
                    <ul className="social-links">
                        <li>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="far fa-envelope-open"></i>{" "}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default HomeIntro;
