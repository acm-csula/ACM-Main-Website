import React, { Component } from "react";
import { useState, useEffect } from "react";
import { db } from "../../professional-events/firebaseConfig";
import {
  getFirestore,
  collection,
  collectionGroup,
  getDocs,
} from "firebase/firestore";
import { Card, Button, Row, Col, Image, Modal } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import "./impAnnouncements.scss";

const ImpAnnouncements = () => {
  const [upcomingEvent, setUpcoming] = useState(null);
  const [featuredEvent, setFeatured] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    (async () => {
      try {
        const upcomingEvents = collectionGroup(db, "upcomingEvents");
        const queryUpcoming = await getDocs(upcomingEvents);
        const comingUpEvents = [];
        queryUpcoming.forEach((doc) => {
          const data = doc.data();
          comingUpEvents.push(data);
        });
        setUpcoming(comingUpEvents);

        const featuredEvents = collectionGroup(db, "featuredEvent");
        const queryFeaturedEvents = await getDocs(featuredEvents);
        const events = [];
        queryFeaturedEvents.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        setFeatured(events);
      } catch (err) {
        console.log("Error occured when fetching events");
      }
    })();
  }, []);

    // firebase
    //   .firestore()
    //   .collection("upcomingEvents")
    //   .get()
    //   .then((snapshot) => {
    //     const events = [];
    //     snapshot.forEach((doc) => {
    //       const data = doc.data();
    //       events.push(data);
    //     });
    //     setUpcoming(events);
    //   })
    //   .catch((error) => console.log(error));
    // firebase
    //   .firestore()
    //   .collection("featuredEvent")
    //   .get()
    //   .then((snapshot) => {
    //     const events = [];
    //     snapshot.forEach((doc) => {
    //       const data = doc.data();
    //       events.push(data);
    //     });
    //     setFeatured(events);
    //   })
    //   .catch((error) => console.log(error));

  let links = ["https://forms.gle/hAjvNSbS47ghMxuE8"];

  return (
    
    <section className="impAnnouncements-tease">
      <div className="content">
        <div className="title mt-4 mb-5">Academic Year 2024-2025</div>
        <div className="video-header">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7NoRuK4Z9Nw?si=e1JoEb8z6K94BFKl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="description mt-3">
          <p>
            Communications will be done via email, Discord, and social media
          </p>  
        </div>
        <br></br>

        <Row id="event-container">
        <Col md={6} id="upcoming-flyer" className="text-center">
          <div className="event-section">
            <h1 className="upcoming-title">Upcoming events</h1>
            <Carousel className="flyer-container">
              {upcomingEvent &&
                upcomingEvent.map((upComingEvents, index) => (
                  <div key={index} onClick={() => openModal(upComingEvents.imgUrl)} style={{cursor: "pointer"}}>
                    <img
                      className="carousel-event-image"
                      src={upComingEvents.imgUrl}
                      alt={upComingEvents.altText}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </Col>
        <Col md={6} id="featured-flyer" className="text-center">
          <div className="event-section">
            <h1 className="featured-title">Featured Events</h1>
            <Carousel className="flyer-container">
              {featuredEvent &&
                featuredEvent.map((event, index) => (
                  <div key={index} onClick={() => openModal(event.imgUrl)} style={{cursor: "pointer"}}>
                    <img
                      className="carousel-event-image"
                      src={event.imgUrl}
                      alt={event.altText}
                      
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </Col>
      </Row>
      </div>
      <Modal show={isOpen} onHide={closeModal} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          {selectedImage && <Image src={selectedImage} alt="Selected Event" style={{objectFit: "contain", overflow: "hidden"}}/>}
        </Modal.Body>
      </Modal>
      
    </section>
  );
};

export default ImpAnnouncements;
