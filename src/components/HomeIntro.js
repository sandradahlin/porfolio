import React from "react";
import profileImg from "../img/profileimg.jpg";
import SocialLinks from "./SocialLinks";
import ScrollAnimation from "react-animate-on-scroll";

const HomeIntro = () => {
    return (
        <header className="header">
            {/* <div className="card">
                <div className="card__side card__side--front"></div>
                <div className="card__side card__side--back"></div>
            </div> */}
            <div className="header__intro-box box-background-light">
                <div class="card">
                    <div class="card__side card__side--front">
                        <img
                            className="header__profile-pic"
                            src={profileImg}
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
                    {/* <div class="card__side card__side--back card__side--back-1">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">$297</p>
                            </div>
                            <a href="#popup" class="btn btn--white">
                                Book now!
                            </a>
                        </div>
                    </div> */}
                </div>
                {/* <div className="header__intro-box--front">
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
                </div> */}
            </div>
        </header>
    );
};

export default HomeIntro;
