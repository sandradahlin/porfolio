import React from "react";
import CarouselComponent from "./CarouselComponent";

const ProjectImageSlider = () => {
    return (
        <section className="section-slider">
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary">Lorem ipsum</h3>
                    <p className="paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illo aliquam omnis repellendus soluta tenetur
                        veritatis, quam assumenda non dicta aperiam sint
                        voluptatum hic ipsa adipisci nulla id suscipit nobis
                        maiores!
                    </p>
                </div>
                <div className="col-1-of-2 ">
                    <div className="project__carousel-container">
                        <CarouselComponent />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectImageSlider;
