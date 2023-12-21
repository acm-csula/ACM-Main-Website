import React from "react";
import { useState, useEffect } from "react";
import { Card, Tab, Tabs, Row, Button } from "react-bootstrap";
import img from "./IMG_0118.png";
import EventSubTab from "./event-subtab";
import AddModal from "./modals/addModal";
import './eventsadmin.css'
import { db } from "../../professional-events/firebaseConfig";
import { collectionGroup, getDocs } from "firebase/firestore";
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
    const [activeTab, setActiveTab] = useState('upcomingEvents');//currently selected tab
    const [addModal, setAddModal] = useState(false);
    const [upcoming, setUpcoming] = useState([]);
    const [semester, setSemester] = useState([]);
    const [past, setPast] = useState([]);
  

    //initialization
    //fetch events from firestore collection: upcomingEvents, semesterEvents, pastEvents
    useEffect(() => {
      (async () => {
        try {
          const upcoming = collectionGroup(db, "upcomingEvents");
          const semester = collectionGroup(db, "semesterEvents");
          const upcomingSnapshot = await getDocs(upcoming);
          const semSnapshot = await getDocs(semester);
          const upcomingGroup = [];
          const semGroup = [];
          upcomingSnapshot.forEach((doc) => {
            const uEvent = {};
            uEvent['id'] = doc.id;
            uEvent['altText'] = doc.data().altText;
            uEvent['imgUrl'] = doc.data().imgUrl;
            upcomingGroup.push(uEvent);
          });
          semSnapshot.forEach((doc) => {
            const sEvent = {};
            sEvent['id'] = doc.id;
            sEvent['altText'] = doc.data().altText;
            sEvent['imgUrl'] = doc.data().imgUrl;
            semGroup.push(sEvent);
          });
  
          setUpcoming(upcomingGroup);
          setSemester(semGroup);
          console.log(upcomingGroup);
          console.log(semGroup);
        } catch (err) {
          console.log("Error occured when fetching events");
        }
      })();
    }, []);


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
        <Tab eventKey="upcomingEvents" title="Upcoming">
          <EventSubTab data={upcoming} activeSection={activeTab} />
        </Tab>
        <Tab eventKey="semesterEvents" title="Semester">
          <EventSubTab data={semester} activeSection={activeTab} />
        </Tab>
        <Tab eventKey="pastEvents" title="Past">
          <EventSubTab data={dummyPast} activeSection={activeTab}/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default EventsAdmin;
