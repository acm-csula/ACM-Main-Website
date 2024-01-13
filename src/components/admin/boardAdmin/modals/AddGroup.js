import React, { useState } from "react";
import { useRef } from "react";
import {
  Modal,
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import {
  addDoc,
  collection,
  getDoc,
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../professional-events/firebaseConfig";

const AddGroup = (props) => {
  const groupRef= useRef("");


  //uploads new member to database
  const addHandler = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "acm_board", props.data.id);

      const updateObj = {
        [`leaders.${props.section}.${groupRef.current.value}`]: [],
      };
      await updateDoc(docRef, updateObj);
      console.log("New Group Added");
    } catch (error) {
      console.error("Error adding event:", error.message);
    }
    props.onHide();
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
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addHandler}>
            <Form.Group controlId="title">
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="text" ref={groupRef} required />
            </Form.Group>
            <Modal.Footer>
              <Button variant="success" className="mb-2" type="submit">
                Confirm
              </Button>
              <Button variant="warning" onClick={props.onHide} className="mb-2">
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddGroup;
