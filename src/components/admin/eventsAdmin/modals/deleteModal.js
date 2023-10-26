import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
const DeleteModal = (props) => {

  //handles deletion
  const deleteHandler = (e) =>{
    //perform a firebase query based on the event title 'altText'
    e.preventDefault();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body align="center">
            <h5>Delete "image_name"?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" onClick={deleteHandler}>
            Confirm
          </Button>
          <Button variant="warning" onClick={props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
