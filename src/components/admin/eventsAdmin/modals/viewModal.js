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
          <Modal.Title id="contained-modal-title-vcenter">{props.data.altText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.data.imgUrl} className="modal-image img-fluid"/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewModal;
