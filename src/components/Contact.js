import React, { useState } from "react";
import "../styles/contact.scss";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Contact() {
    return (
        <div className="contact">
            <ProjectCard />
            {/* <ProjectModal /> */}
        </div>
    );
}
