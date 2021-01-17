import React from "react";
import { Card, Button } from "react-bootstrap";
import ProjectModal from "./ProjectModal";
import "../styles/projectcard.scss";

export default function ProjectCard({
    title,
    description,
    imageLink,
    modalDescription,
    codeLink,
    previewLink,
}) {
    return (
        <Card className="project-card">
            <Card.Img className="card-image" variant="top" src={imageLink} />
            <Card.Body className="card-body">
                <div className="title-text">
                    <Card.Title className="title">{title}</Card.Title>
                    <Card.Text className="description">{description}</Card.Text>
                </div>
                <ProjectModal
                    className="project-modal"
                    title={title}
                    modalDescription={modalDescription}
                    codeLink={codeLink}
                    previewLink={previewLink}
                />
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}
