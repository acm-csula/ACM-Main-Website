import React from "react";
import { useState, useEffect } from "react";
import { Card, Tab, Tabs, Row, Button } from "react-bootstrap";
import EventSubTab from "./event-subtab";
import AddModal from "./modals/addModal";
import "./eventsadmin.css";
import { db } from "../../professional-events/firebaseConfig";
import { collectionGroup, getDocs } from "firebase/firestore";

const EventsAdmin = () => {
  const [activeTab, setActiveTab] = useState("upcomingEvents"); //currently selected tab
  const [addModal, setAddModal] = useState(false); //handles state for showing/hiding add modal

  //these are list states for locally storing data from database
  const [upcoming, setUpcoming] = useState([]);
  const [semester, setSemester] = useState([]);
  const [past, setPast] = useState([]);
  const [featured, setFeatured] = useState([]);

  /* INITIALIZATION (useEffect)
    1. fetch events from firestore collection: upcomingEvents, semesterEvents, pastEvents
    2. store the fetched events into states
  */
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const upcoming = collectionGroup(db, "upcomingEvents");
        const semester = collectionGroup(db, "semesterEvents");
        const past = collectionGroup(db, "pastEvents");
        const featured = collectionGroup(db, "featuredEvent");
        const upcomingSnapshot = await getDocs(upcoming);
        const semSnapshot = await getDocs(semester);
        const pastSnapshot = await getDocs(past);
        const featuredSnapshot = await getDocs(featured);

        if (isMounted) {
          const upcomingGroup = [];
          const semGroup = [];
          const pastGroup = [];
          const featuredGroup = [];
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
          featuredSnapshot.forEach((doc) => {
            const fEvent = {};
            fEvent["id"] = doc.id;
            fEvent["altText"] = doc.data().altText;
            fEvent["imgUrl"] = doc.data().imgUrl;
            featuredGroup.push(fEvent);
          });

          setUpcoming(upcomingGroup);
          setSemester(semGroup);
          setPast(pastGroup);
          setFeatured(featuredGroup);
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

  //updates the local state after adding new event
  const onAddHandler = (eid, title, img) => {
    const newEventObj = { id: eid, altText: title, imgUrl: img };

    if (activeTab === "upcomingEvents") {
      setUpcoming((prevArray) => [...prevArray, newEventObj]);
    } else if (activeTab === "semesterEvents") {
      setSemester((prevArray) => [...prevArray, newEventObj]);
    } else if (activeTab === "featuredEvent") {
      setFeatured((prevArray) => [...prevArray, newEventObj]);
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
    } else if (activeTab === "featuredEvent") {
      const updatedFeatured = featured.filter((item) => item.id !== idToRemove);

      setFeatured(updatedFeatured);
    } else {
      const updatedPast = past.filter((item) => item.id !== idToRemove);

      setPast(updatedPast);
    }
  };

  //handles the title change of an event
  const onEditHandler = (idToEdit, newName) => {
    if (activeTab === "upcomingEvents") {
      const updatedUpcoming = upcoming.map((obj) => {
        if (obj.id === idToEdit) {
          return { ...obj, altText: newName };
        }
        return obj;
      });

      setUpcoming(updatedUpcoming);
    } else if (activeTab === "semesterEvents") {
      const updatedSemester = semester.map((obj) => {
        if (obj.id === idToEdit) {
          return { ...obj, altText: newName };
        }
        return obj;
      });

      setSemester(updatedSemester);
    } else if (activeTab === "featuredEvent") {
      const updatedFeatured = featured.map((obj) => {
        if (obj.id === idToEdit) {
          return { ...obj, altText: newName };
        }
        return obj;
      });

      setFeatured(updatedFeatured);
    } else {
      const updatedPast = past.map((obj) => {
        if (obj.id === idToEdit) {
          return { ...obj, altText: newName };
        }
        return obj;
      });
      setPast(updatedPast);
    }
  };

  /*handles moving an event to different tab
    1. copy the old event from previous tab location 
    2. paste to different tab location
    3. delete the old event
  */
  const onMoveHandler = (oldCopyID, newCopy, newTab) => {
    //pasting to new tab location
    if (newTab === "upcomingEvents") {
      setUpcoming((prevArray) => [...prevArray, newCopy]);
    } else if (newTab === "semesterEvents") {
      setSemester((prevArray) => [...prevArray, newCopy]);
    }
    else if (newTab === "featuredEvent") {
      setFeatured((prevArray) => [...prevArray, newCopy]);
    }  else {
      setPast((prevArray) => [...prevArray, newCopy]);
    }

    //delete old event from previous tab location
    if (activeTab === "upcomingEvents") {
      const updatedUpcoming = upcoming.filter((item) => item.id !== oldCopyID);

      setUpcoming(updatedUpcoming);
    } else if (activeTab === "semesterEvents") {
      const updatedSemester = semester.filter((item) => item.id !== oldCopyID);

      setSemester(updatedSemester);
    }else if (activeTab === "featuredEvent") {
      const updatedFeatured = featured.filter((item) => item.id !== oldCopyID);

      setSemester(updatedFeatured);
    } else {
      const updatedPast = past.filter((item) => item.id !== oldCopyID);

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
            onEdit={onEditHandler}
            onMove={onMoveHandler}
          />
        </Tab>
        <Tab eventKey="semesterEvents" title="Semester">
          <EventSubTab
            data={semester}
            activeSection={activeTab}
            onDelete={onDeleteHandler}
            onEdit={onEditHandler}
            onMove={onMoveHandler}
          />
        </Tab>
        <Tab eventKey="pastEvents" title="Past">
          <EventSubTab
            data={past}
            activeSection={activeTab}
            onDelete={onDeleteHandler}
            onEdit={onEditHandler}
            onMove={onMoveHandler}
          />
        </Tab>
        <Tab eventKey="featuredEvent" title="Featured">
          <EventSubTab
            data={featured}
            activeSection={activeTab}
            onDelete={onDeleteHandler}
            onEdit={onEditHandler}
            onMove={onMoveHandler}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default EventsAdmin;
