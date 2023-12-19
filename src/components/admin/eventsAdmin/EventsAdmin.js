import React from "react";
import { useState } from "react";
import { Card, Tab, Tabs, Row, Button } from "react-bootstrap";
import img from "./IMG_0118.png";
import EventSubTab from "./event-subtab";
import AddModal from "./modals/addModal";
import './eventsadmin.css'
const dummyUpcoming = [
    {
      altText: "Event name",
      imgUrl: img,
    },
    {
      altText: "Event name2",
      imgUrl: img,
    },
    {
      altText: "Event name3",
      imgUrl: img,
    },
  ];
  const dummySemester = [
    {
      altText: "Event name3",
      imgUrl: img,
    },
    {
      altText: "Event name4",
      imgUrl: img,
    },
  ];
  const dummyPast = [
    {
      altText: "Event name5",
      imgUrl: img,
    },
    {
      altText: "Event name6",
      imgUrl: img,
    },
  ];


const EventsAdmin = () => {
    const [activeTab, setActiveTab] = useState('upcoming');//currently selected tab
    const [addModal, setAddModal] = useState(false);
    const [upcoming, setUpcoming] = useState([]);
    const [semester, setSemester] = useState([]);
    const [past, setPast] = useState([]);

    //sets the current selected tab
    const handleTabSelect = (selectedKey) => {
        setActiveTab(selectedKey);
      };
  

  return (
    <div class="container main-event">
      <h1 align="center">Events page</h1>
      
      <Button className="mx-auto mb-3" onClick={() => setAddModal(true)}>Add an event</Button>
      <AddModal show={addModal} onHide={() => setAddModal(false)} currentTab={activeTab} />
      <Tabs defaultActiveKey={activeTab} onSelect={handleTabSelect} id="sub-tabs" className="mb-3 event-tabs">
        <Tab eventKey="upcoming" title="Upcoming">
          <EventSubTab data={dummyUpcoming} />
        </Tab>
        <Tab eventKey="semester" title="Semester">
          <EventSubTab data={dummySemester} />
        </Tab>
        <Tab eventKey="past" title="Past">
          <EventSubTab data={dummyPast} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default EventsAdmin;
