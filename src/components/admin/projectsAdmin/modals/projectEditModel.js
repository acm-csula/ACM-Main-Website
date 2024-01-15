import React from "react";
import { Button, Form, Image, Modal, Row } from "react-bootstrap";

const ProjectEditModal = (props) => {
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
            Edit "select_project"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-5">
            <Row md={5} style={{ gap: "40px" }}>
              <Form.Group controlId="title" style={{ gap: "40px" }}>
                <Form.Label>Change Title</Form.Label>
                <Form.Control
                  type="text"
                  style={{ marginBottom: "40px" }}
                  placeholder="project_title"
                />

                <Form.Label>Change Skills</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder={props.data.skills}
                  style={{ marginBottom: "40px", paddingBottom: "20px" }}
                />

                <Form.Label>Change Leaders</Form.Label>
                <Form.Control as="textarea" style={{ paddingBottom: "20px" }} />
              </Form.Group>

              <Form.Group style={{}} controlId="changeImg">
                <Image width="300px" height="350px" src={props.imgUrl} />
                <Form.Control type="file" size="lg" />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" style={{ float: "right" }}>
              Confirm
            </Button>
            <Button
              onClick={props.onHide}
              style={{ float: "right", marginRight: "20px" }}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectEditModal;
