import React, { useState } from "react";
import "./ProjectsAdmin.scss";
import { Button, Container, Nav, Tab, Tabs } from "react-bootstrap";
import ProjectSubTab from "./project-subtab";

import dummyBegImg from "./dummyBeginner.jpg";
import dummyAdImg from "./dummyAdvanced.jpg";

const ProjectsAdmin = () => {
  const [activeTab, setActiveTab] = useState("semester"); //Sets active tab

  const handleTabSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  const currentProjects = [
    {
      altText: "BP Event Name",
      imgUrl: dummyBegImg,
    },
    {
      altText: "AP Event Name",
      imgUrl: dummyAdImg,
    },
  ];

  const archivedProjects = [
    {
      altText: "Event 1",
      imgUrl: "placeholder",
    },
    {
      altText: "Event 2",
      imgUrl: "placeholder",
    },
    {
      altText: "Event 3",
      imgUrl: "placeholder"
    }
  ];

  return (
    <>
      <Container>

        
          
          <h1>Projects</h1>
          <Tabs defaultActiveKey={activeTab}  variant="pills" id="sub-tabs" className="mb-3 event-tabs">
          <Tab eventKey="semester" title="Semester">
            <ProjectSubTab data={currentProjects} />
          </Tab>
          <Tab eventKey="archived" title="Archived">
            <ProjectSubTab data={archivedProjects} />
          </Tab>
          </Tabs>
        
          
      </Container>
    </>
  );
};

export default ProjectsAdmin;
