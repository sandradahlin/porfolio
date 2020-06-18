import React from "react";
import { Link } from "react-router-dom";
//back img
const ProjectIntro = (props) => {
    const { bgImg, client, desc, link, name, textColorIntro } = props.project;

    return (
        <section
            className="project project__background-image"
            style={{
                backgroundImage: `url(${bgImg})`
            }}
        >
            <div
                className={` ${
                    props.id === "4"
                        ? "text-box-left u-margin-top-big u-margin-left-big"
                        : "project__text-box-absolute"
                } `}
            >
                <h2
                    className="heading-secondary u-margin-bottom-medium "
                    style={{ color: textColorIntro }}
                >
                    {name}
                </h2>
                <p
                    className="paragraph  u-margin-bottom-big "
                    style={{ color: textColorIntro }}
                >
                    {desc}
                </p>
                <a href={link} className="btn-full-beige">
                    VISIT WEBSITE
                </a>
            </div>
        </section>
    );
};
export default ProjectIntro;
