import React from "react";
import { useState } from "react";
import { Button, Image, Modal} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./Programs.css";

/********* UPDATING MENTORSHIP PAGE CONTENT FOR THE NEW SEMESTER *********
  Important Note: It is best to update this page's contents once
            the design team has provided the flyers for the current semester
  1. If you don't have access to firebase firestore (database), ask the Web Master to follow
    this step.

    Instruction: Update the "mentorship" collection in the firebase.
    In the Firebase -> Firestore Database -> mentorship collection,
    - add new document with the following fields:
    - flyer, season, videoLink
    - if flyer and/or videoLink is unavailable, leave it blank

  2. If the current program is Mentorship, leave the description as it is.
    However, if current semester has different type of program for example:
    PRO-DEV workshop, then feel free to change the description an
    *Mentorship default description is at the bottom page*
  3. Adding icons:
    - feel free to add topics/skills that are necessary to the current program
    - refer to https://icons.getbootstrap.com/ to find icons
    - Simply add your icons with this format:
    - <Icon.IconName className="icon" />
  4. Sign-up button:
    - if the sign up link is provided paste the link at the Button element
    - then simply uncomment the Button element
***************************************************************************/

const Mentorship = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const openModel = () => setIsOpen(true)
  const closeModel = () => setIsOpen(false)

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
          If you feel that you are lacking professional skills, or you seek more
          involvement in the tech industry, then this program is perfect for
          you! The mentorship program will teach valuable skills and provide
          resources that are crucial for a professional. Additionally, the
          program helps increase your opportunity in landing jobs and improves
          your financial status. By applying, you will have the opportunity to
          learn important life lessons from your mentors that are not taught in
          the typical classroom environment. Overall, this program will benefit
          you professionally and academically by the time you graduate.
          <br />
          Mentorships are open for sign up to{" "}
          <b>
            <u>all ACM members</u>
          </b>{" "}
          in all different levels (Freshmen, Sophomores, Juniors and Seniors)
        </p>

        {/* LIST OF WORKSHOPS/EVENTS/TOPICS  */}
        <div className="row workshop-container">
          <h1 className="program-description col-12">
            Covered topics from the mentorship program:
          </h1>

          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.FileEarmarkTextFill className="icon" />
              <b>Building your Resume/LinkedIn</b>
            </div>
          </div>
          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.Search className="icon" />
              <b>Internship/Job Hunting</b>
            </div>
          </div>
          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.PeopleFill className="icon" />
              <b>Interviews</b>
            </div>
          </div>
          <div className="skill-item2 col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.Mortarboard className="icon" />
              <b>Succeeding as an Undergrad</b>
            </div>
          </div>
          <div className="skill-item2 col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.CashCoin className="icon" />
              <b>Financial Management</b>
            </div>
          </div>
        </div>
        {/*end of skills list*/}
      </p>

      <div className="signup-section">
        <p className="program-description">Sign-up now!</p>

        {/*Stored in firestore*/}
        <Modal show={isOpen} onHide={closeModel} size="lg">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="d-flex justify-content-center" >
            <img src={props.mentorship.flyer}/>
          </Modal.Body>
        </Modal>
        
          <Image onClick={openModel} style={{cursor: "pointer"}}

            src={props.mentorship.flyer}
            className="current-poster rounded m-auto d-block"
            alt="mentorship flyer"
          ></Image>


        

        {/*Only update here if signup link is live*/}
        <Button
          variant="success"
          className="join-button mx-auto"
          size="lg"
          href="https://docs.google.com/forms/d/e/1FAIpQLSewB2UxdKUC2N67fitAlOVFw5Fq90ct-oGmY-dHR9nGyZ6DAA/viewform"
        >
          Sign up here!
        </Button>
      </div>
    </div>
  );
};

export default Mentorship;

/* Mentorship default description (copy and paste to the "aboutprogram" block):

          If you feel that you are lacking professional skills, or you seek more
          involvement in the tech industry, then this program is perfect for
          you! The mentorship program will teach valuable skills and provide
          resources that are crucial for a professional. Additionally, the
          program helps increase your opportunity in landing jobs and improves
          your financial status. By applying, you will have the opportunity to
          learn important life lessons from your mentors that are not taught in
          the typical classroom environment. Overall, this program will benefit
          you professionally and academically by the time you graduate.
          <br />
          Mentorships are open for sign up to{" "}
          <b>
            <u>all ACM members</u>
          </b>{" "}
          in all different levels (Freshmen, Sophomores, Juniors and Seniors)


  ***This is the description of PRO-DEV program***
  <p className="aboutprogram">
          If you feel that you are lacking professional skills, or you seek more
          involvement in the tech industry, then this program is perfect for
          you! The Professional Development (PRO-DEV) program will teach
          valuable skills and provide resources that are crucial for a
          professional. Additionally, the program helps increase your
          opportunity in landing jobs and improves your financial status. By
          applying, you will have the opportunity to learn important life
          lessons from your ACM leaders that are not taught in the typical classroom
          environment. Overall, this program will benefit you professionally by
          the time you graduate.
          <br />
          These workshops are open for{" "}
          <b>
            <u>all ACM members</u>
          </b>{" "}
          in all different levels (Freshmen, Sophomores, Juniors and Seniors)
        </p>
*/
