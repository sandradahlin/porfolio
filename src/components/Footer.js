import React from "react";

import BasicNavigation from "./BasicNavigation";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-1-of-3 ">
                    <div className="u-margin-left-medium">
                        <h4 className="heading-quaternary ">Contact me</h4>
                        <a
                            href="mailto:a.toholjevic@gmail.com"
                            className="paragraph-small"
                        >
                            a.toholjevic@gmail.com
                        </a>
                        <p className="paragraph-small">073 692 36 61</p>
                        <p className="paragraph-small">211 27 Malmö</p>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <SocialLinks className="u-margin-top-big" />
                </div>
                <div className="col-1-of-3">
                    <div className="u-margin-left-big">
                        <h4 className="heading-quaternary ">Navigation</h4>
                        <BasicNavigation
                            className="footer-nav"
                            additionalItem="Home"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
