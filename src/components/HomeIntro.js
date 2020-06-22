import React from "react";
import profileImg from "../img/profileimg.jpg";
import SocialLinks from "./SocialLinks";

const HomeIntro = () => {
    return (
        <header className="header">
            {/* <Navbar /> */}
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
                    <SocialLinks className="u-margin-top-small" />
                </div>
            </div>
        </header>
    );
};

export default HomeIntro;
