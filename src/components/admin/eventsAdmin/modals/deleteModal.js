import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
const DeleteModal = (props) => {
  //handles deletion
  const deleteHandler = () => {
    //perform a firebase query based on the event id
    const deleteDocument = async () => {
      try {
        await deleteDoc(doc(db, props.eventSection, props.data.id));
        console.log(
          `Document deleted successfully from ${props.eventSection} collection.`
        );

        props.onHide();
        props.removeEvent(props.data.id);
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    };
    deleteDocument();
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
          <h5>
            Delete{" "}
            <span style={{ color: "#0cc6ff" }}>{props.data.altText}</span>?
          </h5>
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
