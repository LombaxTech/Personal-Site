import React from "react";
import { Card, Button } from "react-bootstrap";
import ProjectModal from "./ProjectModal";
import "../styles/projectcard.scss";

export default function ProjectCard() {
    return (
        <Card className="project-card">
            <Card.Img
                className="card-image"
                variant="top"
                src="https://www.bccourier.com/wp-content/uploads/2020/06/Online-Tutoring-Website.jpg"
            />
            <Card.Body className="card-body">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <ProjectModal />
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}
