import React from "react";
import { Link } from "react-router-dom";
//back img
import Roll from "react-reveal/Roll";
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
                <p
                    className="paragraph uppercase u-margin-bottom-small "
                    style={{ color: textColorIntro }}
                >
                    {client}
                </p>
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
                <Roll>
                    <a
                        href={link}
                        target="blank"
                        className={`${
                            textColorIntro === "#fff"
                                ? "btn-ghost-white"
                                : "btn-ghost-dark"
                        }`}
                    >
                        VISIT WEBSITE
                    </a>
                </Roll>
            </div>
        </section>
    );
};
export default ProjectIntro;
