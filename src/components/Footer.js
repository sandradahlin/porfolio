import React from "react";
import BasicNavigation from "./BasicNavigation";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <footer>
            <div className="row display-flex-row--space-between ">
                <div className="display-flex-row--start ">
                    <div>
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

                    <div>
                        <h4 className="heading-quaternary ">Navigation</h4>
                        <BasicNavigation className="footer-nav" />
                    </div>
                </div>
                <div>
                    <SocialLinks className="u-margin-top-big" />
                </div>
            </div>
        </footer>
    );
};
export default Footer;
