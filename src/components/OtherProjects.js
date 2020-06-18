import React from "react";
import { Link } from "react-router-dom";

const OtherProjects = (props) => {
    let projects = [
        { name: "Weddings Hawaii", id: 1 },
        { name: "Mindful", id: 2 },
        { name: "Movie App", id: 3 },
        { name: "Contact Keeper", id: 4 }
    ];

    const name = props.name;

    const reduced = projects.reduce(function (newProjects, currentProject) {
        if (currentProject.name !== name) {
            const item = (
                <li>
                    <Link to={`/projects/${currentProject.id}`}>
                        {currentProject.name}
                    </Link>
                </li>
            );
            newProjects.push(item);
        }
        return newProjects;
    }, []);

    return (
        <section className="other-projects">
            <div className="row">
                <p className="paragraph align-center u-margin-bottom-big u-margin-top-big">
                    Check out other projects
                </p>
                <ul className="other-projects__links">{reduced}</ul>
            </div>
        </section>
    );
};

export default OtherProjects;
