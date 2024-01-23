import React, { useState } from "react";
import { Button, Card, ListGroup, Row } from "react-bootstrap";
import ProjectEditModal from "./modals/projectEditModel";

const ProjectSubTab = (props) => {
  const [editModel, setEditModal] = useState(false);

  const [selectedProject, setSelected] = useState(null);


  return (
    <>
    
      <Row md={3} style={{rowGap: "30vh"}}>
        {props.data &&
          props.data.map((e) => (
            <>
            
              <Card
                className="mx-auto project-card bg-secondary"
                style={{
                  position: "",
                  width: "18rem",
                  height: "75vh",
                  
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
                    <ListGroup.Item>{e.leaders.map((index) => <>
                    <img src={index.img}  style={{width: "93.75px", height: "125px", margin: "20px"}} alt="(Pic Not Found)" />
                    <label>{index.name}</label>
                    </>
                      
                  
                    
                
                     )}
                   </ListGroup.Item>
                    
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
