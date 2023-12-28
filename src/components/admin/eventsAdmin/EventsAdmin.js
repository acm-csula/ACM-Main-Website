import React from "react";
import { useState, useEffect } from "react";
import { Card, Tab, Tabs, Row, Button } from "react-bootstrap";
import img from "./IMG_0118.png";
import EventSubTab from "./event-subtab";
import AddModal from "./modals/addModal";
import "./eventsadmin.css";
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
  const [activeTab, setActiveTab] = useState("upcomingEvents"); //currently selected tab
  const [addModal, setAddModal] = useState(false);
  const [upcoming, setUpcoming] = useState([]);
  const [semester, setSemester] = useState([]);
  const [past, setPast] = useState([]);

  //initialization
  //fetch events from firestore collection: upcomingEvents, semesterEvents, pastEvents
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const upcoming = collectionGroup(db, "upcomingEvents");
        const semester = collectionGroup(db, "semesterEvents");
        const past = collectionGroup(db, "pastEvents");
        const upcomingSnapshot = await getDocs(upcoming);
        const semSnapshot = await getDocs(semester);
        const pastSnapshot = await getDocs(past);

        if (isMounted) {
          const upcomingGroup = [];
          const semGroup = [];
          const pastGroup = [];
          upcomingSnapshot.forEach((doc) => {
            const uEvent = {};
            uEvent["id"] = doc.id;
            uEvent["altText"] = doc.data().altText;
            uEvent["imgUrl"] = doc.data().imgUrl;
            upcomingGroup.push(uEvent);
          });
          semSnapshot.forEach((doc) => {
            const sEvent = {};
            sEvent["id"] = doc.id;
            sEvent["altText"] = doc.data().altText;
            sEvent["imgUrl"] = doc.data().imgUrl;
            semGroup.push(sEvent);
          });
          pastSnapshot.forEach((doc) => {
            const pEvent = {};
            pEvent["id"] = doc.id;
            pEvent["altText"] = doc.data().altText;
            pEvent["imgUrl"] = doc.data().imgUrl;
            pastGroup.push(pEvent);
          });

          setUpcoming(upcomingGroup);
          setSemester(semGroup);
          setPast(pastGroup);
          console.log(upcomingGroup);
          console.log(semGroup);
          console.log(pastGroup);
        }
      } catch (err) {
        console.log("Error occured when fetching events");
      }
    };
    fetchData();

    return () => {
      // Cleanup function to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);

  //sets the current selected tab
  const handleTabSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  const onAddHandler = (eid, title, img) => {
    const newEventObj = { id: eid, altText: title, imgUrl: img };

    if (activeTab === "upcomingEvents") {
      setUpcoming((prevArray) => [...prevArray, newEventObj]);
    } else if (activeTab === "semesterEvents") {
      setSemester((prevArray) => [...prevArray, newEventObj]);
    } else {
      setPast((prevArray) => [...prevArray, newEventObj]);
    }
  };

  //removes the deleted event on confirmation
  const onDeleteHandler = (idToRemove) => {
    if (activeTab === "upcomingEvents") {
      // Use the filter method to create a new array without the element with the specified id
      const updatedUpcoming = upcoming.filter((item) => item.id !== idToRemove);

      // Update the state with the new array
      setUpcoming(updatedUpcoming);
    } else if (activeTab === "semesterEvents") {
      const updatedSemester = semester.filter((item) => item.id !== idToRemove);

      setSemester(updatedSemester);
    } else {
      const updatedPast = past.filter((item) => item.id !== idToRemove);

      setPast(updatedPast);
    }
  };

  return (
    <div class="container main-event">
      <h1 align="center">Events page</h1>

      <Button className="mx-auto mb-3" onClick={() => setAddModal(true)}>
        Add an event
      </Button>
      <AddModal
        show={addModal}
        onHide={() => setAddModal(false)}
        onAdd={onAddHandler}
        currentTab={activeTab}
      />
      <Tabs
        defaultActiveKey={activeTab}
        onSelect={handleTabSelect}
        id="sub-tabs"
        className="mb-3 event-tabs"
      >
        <Tab eventKey="upcomingEvents" title="Upcoming">
          <EventSubTab
            data={upcoming}
            activeSection={activeTab}
            onDelete={onDeleteHandler}
          />
        </Tab>
        <Tab eventKey="semesterEvents" title="Semester">
          <EventSubTab
            data={semester}
            activeSection={activeTab}
            onDelete={onDeleteHandler}
          />
        </Tab>
        <Tab eventKey="pastEvents" title="Past">
          <EventSubTab
            data={past}
            activeSection={activeTab}
            onDelete={onDeleteHandler}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default EventsAdmin;
