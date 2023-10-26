import React from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
const EditModal = (props) => {
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
            Edit "selected_event"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Change title</Form.Label>
              <Form.Control type="text" placeholder="current_name" />
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
