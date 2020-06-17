import React from "react";
import image1 from "../img/hawaii-laptop-1.png";
import image2 from "../img/hawaii-laptop-2.png";
import image3 from "../img/hawaii-laptop-3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
    return (
        <Carousel autoPlay infiniteLoop className="my-carousel">
            <div>
                <img src={image1} />
            </div>
            <div>
                <img src={image2} />
            </div>
            <div>
                <img src={image3} />
            </div>
        </Carousel>
    );
};

export default CarouselComponent;
