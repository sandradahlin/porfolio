import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselComponent from "./CarouselComponent";
import Fade from "react-reveal/Fade";

const ProjectImageSlider = (props) => {
    return (
        <section className="section-slider">
            <Fade>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary">About project</h3>
                        <p className="paragraph">{props.desc}</p>
                    </div>
                    <div className="col-1-of-2 ">
                        <div className="project__carousel-container">
                            {/* {renderSlider()} */}
                            <CarouselComponent img={props.img} />
                            {/* <Carousel autoPlay infiniteLoop>
                            {props.img.map((img) => {
                                return (
                                    <div>
                                        <img src={img} />
                                    </div>
                                );
                            })}
                        </Carousel> */}
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default ProjectImageSlider;
