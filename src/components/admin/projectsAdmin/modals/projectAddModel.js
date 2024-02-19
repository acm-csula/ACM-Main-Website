import React from "react";
import { Modal } from "react-bootstrap";

const ProjectAddModel = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Project
            </Modal.Title>
          </Modal.Header>
        </Modal>
    </>
  );
};

export default ProjectAddModel;
