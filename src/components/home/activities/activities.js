import React, { Component } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Row, Col, Image } from 'react-bootstrap';
// import projectImage from "./images/ACM_presentation.jpg";
// import mentorshipImage from "./images/mentorship.jpg";
// import newsImage from "./images/ACM_table.jpg";
import "./activities.scss";


class Activities extends Component{
  render(){
    return(

      <section className="Activities-tease">
        <div className="content">

          <div id="blue-rectangle"></div>

          <div className="whats-happening">
            <AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
              <div className="title">What's Happening?</div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
              <div className="description">
              ACM hosts projects workshops, mentorship sessions, and events every year to provide students
              hands-on experience to develop skills, prepare students for their future careers, and to 
              foster a sense of community
              </div>
            </AnimationOnScroll>
          </div>

          <AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
            <div className="activity-container">
              <div className="activity">
                <div className="bg-image" id="projectImage"></div>
                <div className="text-box">
                  <a className="label" href="/projects">Project Workshops</a>
                </div>
              </div>
              <div className="activity">
                <div className="bg-image" id="mentorshipImage"></div>
                <div className="text-box">
                  <a className="label" href="/programs">Mentorship Program</a>
                </div>
              </div>
              <div className="activity">
                <div className="bg-image" id="newsImage"></div>
                <div className="text-box">
                  <a className="label" href="/events">Calendar</a>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        
      </section>

    );
  }


}

export default Activities;