import React from "react";
import fontFamilyImage from "../img/lato.png";
import colors from "../img/colors.png";

const ProjectDesign = (props) => {
    if (props.id == 4) return <></>;
    return (
        <section className="section-design">
            <div className="row">
                <div className="col-1-of-2 u-margin-top-small">
                    <img
                        src={props.typo}
                        className="project__design-typography"
                    ></img>
                </div>
                <div className="col-1-of-2 ">
                    <h3 className="heading-tertiary">Design koncept</h3>
                    <p className="paragraph u-margin-bottom-medium">
                        {props.designintro}
                    </p>
                    <img
                        src={props.colors}
                        className="project__design-colors"
                    ></img>
                </div>
            </div>
        </section>
    );
};

export default ProjectDesign;
