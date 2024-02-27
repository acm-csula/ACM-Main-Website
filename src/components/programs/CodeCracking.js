import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./Programs.css";

/***********************************
 * Spring 2024 - Mentorship page temporarily changed to Code Cracking Workshops
 ***********************************/

const CodeCracking = (props) => {
  let isVideo = false;
  if (props.mentorship.videoLink != "") {
    isVideo = true;
  }
  return (
    <div>
      {/*Video Link stored in firestore*/}
      {/*Only render if video link exists*/}
      {isVideo && (
        <div className="videoWrapper">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              src={props.mentorship.videoLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      <p>
        <h2>
          <span className="highlight-text">
            <b>About this program:</b>
          </span>
        </h2>
        <p className="aboutprogram">
          Welcome to our Code Cracking Workshop – your key to success in the
          challenging world of technical interviews! Are you preparing for
          software engineering, data science, or any technical role interviews?
          Look no further! Our workshop is designed to equip you with the skills
          and confidence needed to ace those crucial technical interviews and
          land your dream job.
          <br />
          Workshops are open for sign up to{" "}
          <b>
            <u>all ACM members</u>
          </b>{" "}
          in all levels (Freshmen, Sophomores, Juniors and Seniors)
        </p>

        {/* LIST OF WORKSHOPS/EVENTS/TOPICS  */}
        <div className="row workshop-container">
          <h1 className="program-description col-12">Skills to be earned:</h1>

          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.Tools className="icon" />
              <b>Technical skills</b>
            </div>
          </div>
          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.PeopleFill className="icon" />
              <b>Interview skills</b>
            </div>
          </div>
          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.FileBinary className="icon" />
              <b>Data Structures</b>
            </div>
          </div>
          <div className="skill-item2 col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.Diagram3 className="icon" />
              <b>Algorithms</b>
            </div>
          </div>
          <div className="skill-item2 col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.ChatDots className="icon" />
              <b>Critical Thinking</b>
            </div>
          </div>
        </div>
        {/*end of skills list*/}
      </p>

      <div className="signup-section">
        <p className="program-description">Sign-up now!</p>

        {/*Stored in firestore*/}
        <img
          src={props.mentorship.flyer}
          className="current-poster rounded m-auto d-block"
          alt="mentorship flyer"
        ></img>

        {/*Only update here if signup link is live*/}
        <Button
          variant="success"
          className="join-button mx-auto"
          size="lg"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe7wkqq5MKmvaVF5D6ik3EceyjAaiRltGplG86G4wnKW30kvw/viewform"
          disabled
        >
          Sign-up closed
        </Button>
      </div>
    </div>
  );
};

export default CodeCracking;

/* 
  ***This is the description of Code Cracking program***
  Welcome to our Mastering Technical Interviews Workshop – your key to success in the challenging world of technical interviews! Are you preparing for software engineering, data science, or any technical role interviews? Look no further! Our workshop is designed to equip you with the skills and confidence needed to ace those crucial technical interviews and land your dream job.

What to Expect:
Comprehensive Curriculum: Our workshop covers a wide range of technical topics commonly tested in interviews, including data structures, algorithms, problem-solving strategies, and system design. You'll gain a deep understanding of the key concepts that interviewers often focus on.

Interactive Sessions: Engage in hands-on coding sessions, mock interviews, and collaborative problem-solving activities. Our experienced instructors will guide you through real-world scenarios, providing valuable insights and personalized feedback to enhance your problem-solving skills.

Interview Strategies: Learn effective strategies to approach different types of technical interviews. From behavioral questions to coding challenges, we'll help you develop a solid game plan to tackle any interview scenario with confidence.

Peer Learning: Connect with like-minded individuals who share your passion for technical excellence. Collaborate with peers, participate in group discussions, and build a supportive network within the tech community.

Why Choose Our Workshop:

Experienced Instructors: Our team of industry professionals and experienced interviewers bring a wealth of knowledge to the table. Benefit from their insights, tips, and firsthand experience navigating technical interviews at top tech companies.

Tailored Learning: Whether you're a recent graduate or a seasoned professional, our workshop is crafted to meet the needs of participants at various skill levels. We provide a supportive learning environment where everyone can thrive.

Practical Approach: We believe in learning by doing. Our workshop emphasizes practical, real-world applications of technical concepts. You'll leave not just with knowledge but with the ability to apply it effectively.

Don't miss this opportunity to sharpen your technical skills and boost your confidence! Join us on the journey to mastering technical interviews. 
*/
