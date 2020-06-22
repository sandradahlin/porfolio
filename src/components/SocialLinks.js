import React from "react";

export default function SocialLinks(props) {
    return (
        <>
            <ul className={`social-links ${props.className}`}>
                <li>
                    <a href="https://www.linkedin.com/in/aleksandra-toholjevic-46528b28/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/sandra-td" target="blank">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:a.toholjevic@gmail.com">
                        <i class="far fa-envelope-open"></i>{" "}
                    </a>
                </li>
            </ul>
        </>
    );
}
