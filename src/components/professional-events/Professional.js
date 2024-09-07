import React, { useState, useEffect } from "react";
import "./professional.css";
import { db } from "./firebaseConfig.js";
import {
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
} from "firebase/firestore";
import { Card, Button, Image, Modal } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

const Professional = () => {
  const [semesterEvent, setSemesterEvent] = useState(null);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [pastEvent, setPastEvent] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const semesterEvents = collectionGroup(db, "semesterEvents");
        const queryAllSemester = await getDocs(semesterEvents);
        const semesterEventsList = queryAllSemester.docs.map(doc => doc.data());
        setSemesterEvent(semesterEventsList);

        const upcomingEvents = collectionGroup(db, "upcomingEvents");
        const queryAllUpcoming = await getDocs(upcomingEvents);
        const upcomingEventsList = queryAllUpcoming.docs.map(doc => doc.data());
        setUpcomingEvent(upcomingEventsList);

        const pastEvents = collectionGroup(db, "pastEvents");
        const queryAllPast = await getDocs(pastEvents);
        const pastEventsList = queryAllPast.docs.map(doc => doc.data());
        setPastEvent(pastEventsList);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const openModal = (imgUrl) => {
    setModalImage(imgUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className="events-container">
      <div className="events-header-container">
        <div id="events-header-title">Events</div>
        <div id="events-blur-effect"></div>
      </div>

      <div className="upcoming-events mx-auto mb-5">
        <p className="text-center m-3 events-header">Upcoming Events</p>
        <div className="d-flex flex-wrap justify-content-center m-2">
          {upcomingEvent && upcomingEvent.map((event, index) => (
            <Card
              key={index}
              className="professional-card"
              style={{ width: "24rem", padding: "10px", margin: "2em" }}
            >
              <center>
                <img
                  style={{ height: "30rem", padding: "10px", cursor: "pointer" }}
                  src={event.imgUrl}
                  alt="Upcoming event"
                  onClick={() => openModal(event.imgUrl)}
                />
              </center>
            </Card>
          ))}
        </div>
      </div>

      <hr style={{
        color: "#ffffff",
        backgroundColor: "#ffffff",
        height: 0.5,
        borderColor: "#ffffff",
        marginLeft: "10px",
        marginRight: "10px",
      }} />

      <div className="semester-events mx-auto mb-5">
        <p className="text-center m-3 events-header">Semester Events</p>
        <div className="d-flex flex-wrap justify-content-center m-2">
          {semesterEvent && semesterEvent.map((event, index) => (
            <Card
              key={index}
              className="professional-card"
              style={{ width: "24rem", padding: "10px", margin: "2em" }}
            >
              <center>
                <img
                  style={{ height: "30rem", padding: "10px", cursor: "pointer" }}
                  src={event.imgUrl}
                  alt="Current event"
                  onClick={() => openModal(event.imgUrl)}
                />
                {event.signUpLink && (
                  <Button href={event.signUpLink}>Sign Up</Button>
                )}
              </center>
            </Card>
          ))}
        </div>
      </div>

      <hr style={{
        color: "#ffffff",
        backgroundColor: "#ffffff",
        height: 0.5,
        borderColor: "#ffffff",
        marginLeft: "10px",
        marginRight: "10px",
      }} />

      <div className="past-events mx-auto">
        <p className="text-center events-header">Past Events</p>
        <div className="professional-slideshow">
          <div className="images">
            {pastEvent && pastEvent.map((event, index) => (
              <Image
                key={index}
                style={{ width: "350px", height: "30rem", margin: "1em", cursor: "pointer" }}
                src={event.imgUrl}
                thumbnail
                onClick={() => openModal(event.imgUrl)}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <img src={modalImage} alt="Event" style={{ width: "100%", height: "auto" }} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Professional;