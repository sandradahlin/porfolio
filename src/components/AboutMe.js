import React from "react";
import computerImage from "../img/mac.jpg";

const AboutMe = () => {
    return (
        <section className="section-about">
            <div className="row">
                <div className="col-1-of-2">
                    <img src={computerImage} className="image-left"></img>
                </div>
                <div className="col-1-of-2">
                    <p className="paragraph text-box box-background-dark ">
                        I love front-end web development because it's creative,
                        challenging and constantly stimulating. I can quickly
                        make anything I can think of, and logically conceive, a
                        reality. And not only that, but I can also create
                        something other people might find useful and helpful.
                    </p>
                    <p className="paragraph text-box box-background-dark ">
                        I am impressed when I see smart and beautiful code that
                        solves a certain problem in an elegant way, inspiring me
                        to strive for constant improvement.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
