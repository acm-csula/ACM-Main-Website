import React, { useState } from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import {
  doc,
  updateDoc,
  collection,
  addDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
const EditModal = (props) => {
  const [title, setTitle] = useState("");

  //handles title change
  const editHandler = () => {
    const editEvent = async () => {
      try {
        if (title !== "") {
          const eventRef = doc(db, props.eventSection, props.data.id);
          await updateDoc(eventRef, { altText: title });
          console.log("Successfully edited: ", title);
          props.editEvent(props.data.id, title);
        }
        props.onHide();
      } catch (error) {
        console.error("Error editing event:", error.message);
      }
    };
    editEvent();
  };

  //moves the event to different tab
  const moveHandler = async (e) => {
    if (props.eventSection !== e) {
      try {
        const newEvent = await addDoc(collection(db, e), {
          altText: props.data.altText,
          imgUrl: props.data.imgUrl,
        });
        let newEventRef = (await getDoc(newEvent)).data();
        newEventRef = {
          id: newEvent.id,
          ...newEventRef,
        };
        console.log("Successfully moved event");
        await deleteDoc(doc(db, props.eventSection, props.data.id));

        props.moveEvent(props.data.id, newEventRef, e);
      } catch (error) {
        console.error("Error moving event:", error.message);
      }
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
          <Modal.Title id="contained-modal-title-vcenter">
            Edit "{props.data.altText}"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Change title</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.data.altText}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" onClick={editHandler} className="mb-2">
              Confirm
            </Button>
            <Button variant="warning" onClick={props.onHide} className="mb-2">
              Cancel
            </Button>

            <Modal.Footer>
              <Dropdown className="my-2">
                <Dropdown.Toggle variant="secondary" id="dropdown-edit">
                  Move to section
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => moveHandler("upcomingEvents")}>
                    Upcoming
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => moveHandler("semesterEvents")}>
                    Semester
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => moveHandler("pastEvents")}>
                    Past
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
