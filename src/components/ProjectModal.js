import React, { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import "../styles/projectmodal.scss";

export default function ProjectModal({
    title,
    modalDescription,
    previewLink,
    codeLink,
}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="project-modal">
            <Button
                variant="primary"
                onClick={handleShow}
                className="modal-launch-button"
            >
                View
            </Button>

            <Modal
                className="modal"
                show={show}
                onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="modal-text">
                        {/* A description of the project. <br />
                        Techonologies used: <br />
                        - tech1
                        <br />- tech2 */}
                        {modalDescription}
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button
                        className="modal-footer-button"
                        variant="secondary"
                        onClick={() => (window.location.href = previewLink)}
                    >
                        Live Preview
                    </Button>
                    <Button
                        className="modal-footer-button"
                        variant="primary"
                        onClick={() => (window.location.href = codeLink)}
                        style={{ display: codeLink === "" ? "none" : "block" }}
                    >
                        View Code
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
