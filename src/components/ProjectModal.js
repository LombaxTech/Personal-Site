import React, { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import "../styles/projectmodal.scss";

export default function ProjectModal({
    title,
    description,
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
                    {/* <Image
                        className="modal-image"
                        src="https://i.guim.co.uk/img/media/ce1a5dea37e74585f1d257179153faa47c12aedd/60_0_1800_1080/master/1800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3050feed5b5b1d77b1e639b1bd7a68f8"
                        fluid
                    /> */}
                    <div className="modal-text">
                        {/* A description of the project. <br />
                        Techonologies used: <br />
                        - tech1
                        <br />- tech2 */}
                        {description}
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button className="modal-footer-button" variant="secondary">
                        <a href="www.youtube.com">Live Preview</a>
                    </Button>
                    <Button
                        className="modal-footer-button"
                        variant="primary"
                        onClick={() =>
                            (window.location.href =
                                "https://rk-languages.netlify.app/")
                        }
                    >
                        View Code
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
