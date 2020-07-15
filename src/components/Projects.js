import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "../styles/projects.scss";

export default function Projects() {
    // document.title += " project";

    return (
        <div className="projects-page">
            <h1 className="project">Projects</h1>
            <div className="projects">
                <ProjectCard className="project" />
                <ProjectCard className="project" />
                <ProjectCard className="project" />
                <ProjectCard className="project" />
                <ProjectCard className="project" />
            </div>
        </div>
    );
}
