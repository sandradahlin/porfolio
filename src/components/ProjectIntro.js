import React from "react";
import { Link } from "react-router-dom";
//back img
const ProjectIntro = (props) => {
    console.log(props, props);
    return (
        <section
            className="project project__background-image"
            style={{
                backgroundImage: `url(${props.project.bgImg})`
            }}
        >
            <div className="project__text-box-absolute">
                <h2 className="heading-secondary u-margin-bottom-medium ">
                    {props.project.projectName}
                </h2>
                <p className="paragraph  u-margin-bottom-big ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro dicta quos officiis fuga possimus earum aut quod
                    corrupti doloremque velit animi magni tempora magnam
                    voluptatum dolorem asperiores, illum suscipit facilis.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a className="btn-full-beige">VISIT WEBSITE</a>
            </div>
        </section>
    );
};
export default ProjectIntro;
