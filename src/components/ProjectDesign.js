import React from "react";
import fontFamilyImage from "../img/lato.png";
import colors from "../img/colors.png";

const ProjectDesign = () => {
    return (
        <section className="section-design">
            <div className="row">
                <div className="col-1-of-2">
                    <img
                        src={fontFamilyImage}
                        className="project__design-typography"
                    ></img>
                </div>
                <div className="col-1-of-2 ">
                    <h3 className="heading-tertiary">Design koncept</h3>
                    <p className="paragraph u-margin-bottom-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum neque hic deleniti error veniam beatae atque
                        sapiente itaque.
                    </p>
                    <img src={colors} className="project__design-colors"></img>
                </div>
            </div>
        </section>
    );
};

export default ProjectDesign;
