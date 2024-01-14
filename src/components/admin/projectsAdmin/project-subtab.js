import React, { useState } from "react";
import { Button, Card, ListGroup, Row } from "react-bootstrap";
import ProjectEditModal from "./modals/projectEditModel";
import { ButtonOr } from "semantic-ui-react";

const ProjectSubTab = (props) => {
  const [editModel, setEditModal] = useState(false);

  const [selectedProject, setSelected] = useState(null);

  return (
    <>
      <Row md={3}>
        {props.data &&
          props.data.map((e) => (
            <>
              <Card
                className="mx-auto project-card bg-secondary"
                style={{
                  width: "18rem",
                  height: "75vh",
                  paddingBottom: "10vh",
                }}
              >
                <Card.Body>
                  <Card.Title
                    className="text-light"
                    style={{ textAlign: "center" }}
                  >
                    {e.title}
                  </Card.Title>

                  <Card.Img variant="top" src={e.imgUrl}></Card.Img>
                  <ListGroup
                    variant="flush"
                    style={{ color: "black", textAlign: "center" }}
                  >
                    <ListGroup.Item>{e.skills}</ListGroup.Item>
                    <ListGroup.Item>{e.leaders.name}</ListGroup.Item>
                  </ListGroup>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setEditModal(true);
                      setSelected(e);
                    }}
                  >
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            </>
          ))}
        {selectedProject && (
          <>
            <ProjectEditModal
              show={editModel}
              onHide={() => setEditModal(false)}
              data={selectedProject}
              imgUrl={selectedProject.imgUrl}
            />
          </>
        )}
      </Row>
    </>
  );
};

export default ProjectSubTab;
