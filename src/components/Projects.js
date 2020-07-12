import React from "react";
import { Link } from "react-router-dom";
import "../styles/projects.scss";

export default function Projects() {
    return (
        <div>
            <ul className="projects">
                <li className="project">
                    <Link to="/project1" className="project-link">
                        Project 1
                    </Link>
                </li>
                <li className="project">
                    <Link to="/project2">Project 2</Link>
                </li>
                <li className="project">
                    <Link to="/project3">Project 3</Link>
                </li>
            </ul>
        </div>
    );
}
