import React from "react";
import Fade from "react-reveal/Fade";

const ProjectDesign = (props) => {
    if (props.id == 4) return <></>;
    return (
        <section className="section-design">
            <Fade>
                <div className="row">
                    <div className="col-1-of-2 u-margin-top-small">
                        <img
                            src={props.typo}
                            className="project__design-typography"
                            alt=""
                        ></img>
                    </div>
                    <div className="col-1-of-2 ">
                        <h3 className="heading-tertiary">Design</h3>
                        <p className="paragraph u-margin-bottom-medium">
                            {props.designintro}
                        </p>
                        <img
                            src={props.colors}
                            className="project__design-colors"
                            alt=""
                        ></img>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default ProjectDesign;
