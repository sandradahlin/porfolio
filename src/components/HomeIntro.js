import React from "react";
import Flip from "react-reveal/Flip";
import profileImg from "../img/profileimg.jpg";
import SocialLinks from "./SocialLinks";

const HomeIntro = () => {
    return (
        <header className="header" id="home">
            <div className="header__intro-box ">
                <Flip>
                    <div className="box-background-light">
                        <div className="header__intro-box--front">
                            <img
                                className="header__profile-pic"
                                src={profileImg}
                                alt=""
                            ></img>
                            <div className="header__content-box">
                                <h1 className="heading-primary">
                                    <span className="heading-primary--main">
                                        Hi! I'm Aleksandra
                                    </span>
                                    <span className="heading-primary--sub">
                                        Frontend Web Developer |
                                    </span>
                                </h1>
                                <SocialLinks className="u-margin-top-small" />
                            </div>
                        </div>
                    </div>
                </Flip>
            </div>
        </header>
    );
};

export default HomeIntro;
