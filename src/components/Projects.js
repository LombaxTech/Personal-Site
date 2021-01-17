import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "../styles/projects.scss";
import projects from "../projects";

export default function Projects() {
    // document.title += " project";

    console.log(projects);

    return (
        <div className="projects-page">
            <h1 className="project">Projects</h1>
            <div className="projects">
                {projects.map((project, i) => (
                    <ProjectCard
                        className="project"
                        title={project.title}
                        description={project.description}
                        imageLink={project.imageLink}
                        modalDescription={project.modalDescription}
                        codeLink={project.codeLink}
                        previewLink={project.previewLink}
                    />
                ))}
            </div>
        </div>
    );
}
