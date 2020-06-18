import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    return (
        <nav>
            <div className="row nav">
                <ul className="secondary-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <HashLink smooth to="#skills">
                            Skills
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
