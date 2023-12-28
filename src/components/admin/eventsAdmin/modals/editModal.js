import React, { useState } from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore"; 
const EditModal = (props) => {
  const [title, setTitle] = useState("");

  const editHandler = async () =>{
      try {
        if(title !== ""){
          const eventRef = doc(db, props.eventSection, props.data.id);
          await updateDoc(eventRef,{altText:title});
        }
        console.log("Successfully edited: ", title);
      } catch (error) {
        console.error("Error editing event:", error.message);
      }
      props.editEvent(props.data.id, title);
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
          <Modal.Title id="contained-modal-title-vcenter">
            Edit "{props.data.altText}"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editHandler}>
            <Form.Group controlId="title">
              <Form.Label>Change title</Form.Label>
              <Form.Control type="text" placeholder={props.data.altText} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Dropdown className="my-2">
              <Dropdown.Toggle variant="secondary" id="dropdown-edit">
                Move to section
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Upcoming</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Semester</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Past</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Confirm
              </Button>
              <Button variant="warning" onClick={props.onHide}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
