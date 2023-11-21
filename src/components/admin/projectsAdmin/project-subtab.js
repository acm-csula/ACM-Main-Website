import React, { useState } from "react";
import { Button, Card, ListGroup, Row } from "react-bootstrap";
import ProjectEditModal from "./modals/projectEditModel";

const ProjectSubTab = (props) => {
  const [editModel, setEditModel] = useState(false);
  const editToggle = () => setEditModel(true)

  
  return (
    <>
      <Row md={2}>
        {props.data &&
          props.data.map((e) => (
            <>
              <Card
                className="mx-auto project-card bg-secondary"
                style={{ width: "18rem", height: "75vh" }}>
                <Card.Body>
                  <Card.Title
                    className="text-light"
                    style={{ textAlign: "center" }}>
                    {e.altText}
                  </Card.Title>

                  <Card.Img
                    variant="top"
                    src={e.imgUrl}></Card.Img>
                  <ListGroup
                    variant="flush"
                    style={{ color: "black", textAlign: "center" }}>
                    <ListGroup.Item>List of Skills</ListGroup.Item>
                    <ListGroup.Item>List of Leaders</ListGroup.Item>
                  </ListGroup>
                  <Button
                    variant="primary"
                    onClick={() => setEditModel(true)}>
                    Edit
                  </Button>
                </Card.Body>
              </Card>
              <ProjectEditModal
                show={editModel}
                onHide={() => setEditModel(false)}
              />
            </>
          ))}
      </Row>
    </>
  );
};

export default ProjectSubTab;
