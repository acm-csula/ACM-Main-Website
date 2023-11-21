import React from "react";
import { Button, Col, Form, Image, Modal, Row, Stack} from "react-bootstrap";


const ProjectEditModal = (props) => {

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit "select_project"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
              <Form.Group as={Col} controlId="title">
                <Form.Label>Change Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="project_title"
                />
              </Form.Group>
           
              <Form.Group as={Col} controlId="listSkills">
                <Form.Label>Change Skills</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            
              <Form.Group as={Col} controlId="listLeaders">
                <Form.Label>Change Leaders</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>

              <Form.Group as={Row} controlId="changeImg">
                <Image src="./dummyAdvanced.jpg" />
                <Form.Control type="file" size="lg" />
              </Form.Group>
         
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectEditModal
