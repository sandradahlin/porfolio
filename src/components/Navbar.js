import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    return (
        <nav>
            <div className="row nav">
                <ul className="main-nav">
                    <li>
                        <HashLink smooth to="#about">
                            About me{" "}
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#skills">
                            Skills
                        </HashLink>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
