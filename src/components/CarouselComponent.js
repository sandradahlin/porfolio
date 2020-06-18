import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = (props) => {
    return (
        props.img.length !== 0 && (
            <Carousel autoPlay infiniteLoop className="my-carousel">
                {props.img.map((i) => (
                    <div>
                        <img src={i} />
                    </div>
                ))}
            </Carousel>
        )
    );
};

export default CarouselComponent;
