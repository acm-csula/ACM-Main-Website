import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./Programs.css";

/********* UPDATING MENTORSHIP PAGE CONTENT FOR THE NEW SEMESTER *********
  Important Note: It is best to update this page's contents once
            the DESIGN TEAMM has provided the flyers for the current semester
  1. If you don't have access to firestore, ask the Web Master to follow
    this step.

    Instruction: Update the "mentorship" collection in the firebase.
    In the Firebase -> Firestore Database -> mentorship collection,
    - add new document with the following fields:
    - flyer, season, videoLink
    - if flyer and/or videoLink is unavailable, leave it blank

  2. If the current program is Mentorship, leave the description as it is.
    However, if current semester has different type of program for example
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

/***********************************
 * Spring 2024 - Mentorship page temporarily changed to Code Cracking Workshops
 * 
 * 
 ***********************************/

const Mentorship = (props) => {
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
          <h1 className="program-description col-12">
            Skills to be earned:
          </h1>

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
          href="https://forms.gle/hAjvNSbS47ghMxuE8"
          disabled
        >
          Form not yet available..
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
