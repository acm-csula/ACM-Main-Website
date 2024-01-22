import React, { Component } from "react";
import { useState, useEffect } from "react";
import { db } from "../../professional-events/firebaseConfig";
import {
  getFirestore,
  collection,
  collectionGroup,
  getDocs,
} from "firebase/firestore";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import "./impAnnouncements.scss";

const ImpAnnouncements = () => {
  const [upcomingEvent, setUpcoming] = useState(null);
  const [featuredEvent, setFeatured] = useState(null);

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
        <div className="title mt-4 mb-5">Academic Year 2023-2024</div>
        <div className="video-header">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QORLZ94PzVk"
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
          <Col md={6} id="upcoming-flyer" class="text-center">
            <div className="event-section">
              <h1 className="upcoming-title">Upcoming events</h1>
              <Carousel className="flyer-container">
                {upcomingEvent &&
                  upcomingEvent.map((upComingEvents) => {
                    return (
                      <div>
                        <img
                          className="carousel-event-image"
                          src={upComingEvents.imgUrl}
                          alt={upComingEvents.altText}
                        />
                      </div>
                    );
                  })}
              </Carousel>
            </div>
          </Col>
          <Col md={6} id="featured-flyer" class="text-center">
            <div className="event-section">
              <h1 className="featured-title">Featured Events</h1>
              <Carousel className="flyer-container">
                {featuredEvent &&
                  featuredEvent.map((event) => {
                    return (
                      <div>
                        <img
                          className="carousel-event-image"
                          src={event.imgUrl}
                          alt={event.altText}
                        />
                      </div>
                    );
                  })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ImpAnnouncements;
