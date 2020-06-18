import React from "react";
import computerImage from "../img/mac.jpg";

const AboutMe = () => {
    return (
        <section className="section-about" id="about">
            <div className="row">
                <div className="col-1-of-2">
                    <img src={computerImage} className="image-left"></img>
                </div>
                <div className="col-1-of-2 u-margin-top-big">
                    <p className="paragraph text-box box-background-dark ">
                        I love front-end web development because it's creative,
                        challenging and constantly stimulating, inspiring me to
                        strive for constant improvement. I can quickly make
                        anything I can think of, and logically conceive, a
                        reality. And not only that, but I can also create
                        something other people might find useful and helpful.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
