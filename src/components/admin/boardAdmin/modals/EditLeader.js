import React from "react";
import { Modal, Form, Button, InputGroup } from "react-bootstrap";
const EditLeader = (props) => {

  const updateLeaderHandler = () =>{

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
          <Button variant="danger">
                Clear Info
              </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>First name</InputGroup.Text>
              <Form.Control type="text" aria-label="First name" placeholder={props.leader.first}/>
              <InputGroup.Text className="ml-3">Last name</InputGroup.Text>
              <Form.Control type="text" aria-label="Last name" placeholder={props.leader.last}/>
            </InputGroup>
            <Form.Group controlId="title">
              <Form.Label>Position</Form.Label>
              <Form.Control type="text" placeholder={props.leader.position}/>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Update photo</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>
            <Modal.Footer>
              <Button variant="success" onClick={updateLeaderHandler} className="mb-2">
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

export default EditLeader;
