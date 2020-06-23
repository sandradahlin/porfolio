import React from "react";
import computerImage from "../img/mac.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
    return (
        <Fade>
            <section className="section-about" id="about">
                <div className="row">
                    <div className="col-1-of-2">
                        <img src={computerImage} className="image-left"></img>
                    </div>
                    <div className="col-1-of-2 u-margin-top-big text-box box-background-dark ">
                        <h3 className="heading-tertiary-white">Why code?</h3>
                        <p className="paragraph ">
                            I love front-end web development because it's
                            creative, challenging and constantly stimulating,
                            inspiring me to strive for constant improvement. I
                            can quickly make anything I can think of, and
                            logically conceive, a reality. And not only that,
                            but I can also create something other people might
                            find useful and helpful.
                        </p>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default AboutMe;
