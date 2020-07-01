import React from "react";

export default function SocialLinks(props) {
    return (
        <>
            <ul className={`social-links ${props.className}`}>
                <li>
                    <a
                        href="https://www.linkedin.com/in/aleksandra-toholjevic-46528b28/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/sandra-td"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:a.toholjevic@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="far fa-envelope-open"></i>{" "}
                    </a>
                </li>
            </ul>
        </>
    );
}
