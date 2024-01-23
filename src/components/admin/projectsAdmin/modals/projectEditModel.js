import React, { useState } from "react";
import { Button, Form, Image, Modal, Row } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
const ProjectEditModal = (props) => {
  const [title, setTitle] = useState("");
  const [leaders, setLeaders] = useState([]);
  const [leaderImgs, setLeaderImgs] = useState([]);

  const editHandler = () => {
    const editProject = async () => {
      try {
        if (title !== "") {
          const projectRef = doc(db, "project_workshop", props.data.id);

          const nestedPath = "level." + props.data.level + ".title";

          await updateDoc(projectRef, { [nestedPath]: title });

          console.log("Successfully edited: ", title);
          props.editProject(props.data.id, title);
        }
      } catch (error) {
        console.error("Error editing project:", error.message);
      }
    };
    editProject();
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
            Edit "{props.data.title}"
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
                  placeholder={props.data.title}
                  onChange={(e) => setTitle(e.target.value)}
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
            <Button
              variant="success"
              style={{ float: "right" }}
              onClick={editHandler}
            >
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
