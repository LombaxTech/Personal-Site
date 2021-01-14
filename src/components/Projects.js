import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "../styles/projects.scss";
import animeImg from "../images/animeSearcher.PNG";

export default function Projects() {
    // document.title += " project";

    return (
        <div className="projects-page">
            <h1 className="project">Projects</h1>
            <div className="projects">
                <ProjectCard
                    className="project"
                    title="Anime Searcher"
                    description="Search and stay updated on your favourite series!"
                    imageLink={animeImg}
                />
                <ProjectCard
                    className="project"
                    title="Spaceship Flyer"
                    description="Fly as long as you can while dodging enemies"
                />
                <ProjectCard
                    className="project"
                    title="RK Languages"
                    description="Learn a new language while making friends and having fun"
                />
                <ProjectCard
                    className="project"
                    title="Rakib Khan"
                    description="Personal site of Rakib Khan"
                />
            </div>
        </div>
    );
}
