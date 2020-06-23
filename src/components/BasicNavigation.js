import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function BasicNavigation(props) {
    return (
        <>
            <ul className={props.className}>
                <li>
                    <HashLink smooth to="/#about">
                        About me{" "}
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#skills">
                        Skills
                    </HashLink>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>

                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </>
    );
}
