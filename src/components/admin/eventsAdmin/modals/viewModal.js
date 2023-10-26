import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
const ViewModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">View</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.image} className="modal-image img-fluid"/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewModal;
