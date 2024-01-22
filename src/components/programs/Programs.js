import React from "react";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Col, Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Programs.css";
import Mentorship from "./Mentorship.js";
import ArchiveProgram from "./ArchivePrograms.js";
import { db } from "../professional-events/firebaseConfig.js";
import { collectionGroup, getDocs, query, orderBy } from "firebase/firestore";
/* Updating the Mentorship page:
  - Update schoolYears array
  - Add new mentorship section
  - update the flyer image
*/

//These are list of semesters that has mentorship programs
/*Step 1: If there's a new program, insert the new semester year
as the first element with this format -> ["first", *Season* *Year*]
Step 2: Update the following ordinals of older semesters
*/
const Programs = () => {
  const [currentSem, setCurrent] = useState(null);
  const [currentProgram, setProgram] = useState(null);
  const [prevMentorship, setPrev] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const events = [];
    const seasons = [];

    const fetchData = async () => {
      try {
        const programsRef = collectionGroup(db, "mentorship");
        const programsSnapshot = await getDocs(
          query(programsRef, orderBy("date", "desc"))
        );

        programsSnapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
          seasons.push(data.season);
        });

        if (isMounted) {
          setProgram(events.at(0));
          setCurrent(events.at(0).season);
          setPrev(events);
        }
      } catch (err) {
        console.log("Error occured when fetching board", err);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to set isMounted to false when component is unmounted
      isMounted = false;
    };
  }, []);

  /*This function updates the text of the dropdown button*/
  const changeYear = (sem) => {
    setCurrent(sem);
  };
  return (
    <div className="programs-body">
      <div className="prodev-header-container">
        <div id="prodev-header-title">
          Participate in our CodeCracking program for Spring 2024!
        </div>
      </div>
      {/* 
                Remember to update dates in the disclaimer: 
                1. Mentorship program signups open
                2. Signup deadline 
                */}

      <div className="disclaimer-body">
        <h3 className="disclaimer_header">
          <b>Disclaimers:</b>
        </h3>
        <span className="disclaimer">
          <b>
            1. ACM membership is required to apply for the program!
            If you are not a member, you will not be allowed in.
          </b>
        </span>
        <br />
        <span className="disclaimer">
          <b>
            2. This program is a semester-long program, and sessions are on Thursdays from 3:00-4:20pm.
          </b>
        </span>
      </div>
      {/* Commenting videos for now because there's not yet new ones
        
        <div className="videoWrapper">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gCGZ_U_9jeY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        */}
      <div className="card programs-card">
        <Tab.Container id="left-tabs-example" defaultActiveKey={"current"}>
          <Nav className="project-tab-label" variant="pills">
            <Nav.Item>
              <Nav.Link
                className="project-nav-link-tab anchor-white"
                eventKey="current"
              >
                {currentSem}
              </Nav.Link>
            </Nav.Item>
            {/*
            
            <Nav.Item>
              <Nav.Link
                className="project-nav-link-tab anchor-white"
                eventKey="archive"
              >
                Archive
              </Nav.Link>
            </Nav.Item>
            */}
          </Nav>
          <Col sm={12} className="programs-tab-container"></Col>
          {/*Starting here, each tab pane should be mapped*/}
          {/*Access total number of past mentorships*/}
          {/*Each event key must be identified as just index numbers 0 to n*/}
          {currentProgram && (
            <Tab.Content className="programs-tab-content">
              <Tab.Pane eventKey={"current"}>
                <Mentorship mentorship={currentProgram} />
                <div class="border-carousel"></div>
                <h2>
                  ❖{" "}
                  <span className="highlight-text">
                    Workshop Mentors and Guest Speakers:
                  </span>
                </h2>
                <br></br>
                <div className="mentor-carousel">
                  <Carousel infiniteLoop>
                    {currentProgram.speakers &&
                      currentProgram.speakers.map((leader) => {
                        return (
                          <div>
                            <img
                              className="carousel-leader-image"
                              src={leader.imgURL}
                              alt="leader"
                            />
                            <p className="legend">{leader.name}</p>
                          </div>
                        );
                      })}
                  </Carousel>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={"archive"}>
                {prevMentorship && (
                  <ArchiveProgram mentorshipList={prevMentorship.slice(1)} />
                )}
              </Tab.Pane>
            </Tab.Content>
          )}
        </Tab.Container>
        <br></br>
      </div>
    </div>
  );
};

export default Programs;
