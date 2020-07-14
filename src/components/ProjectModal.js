import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../styles/projectmodal.scss";

export default function ProjectModal() {
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
                Launch demo modal
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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer className="modal-Footer">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
