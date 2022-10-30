import React, { Component } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Row, Col, Image } from 'react-bootstrap';

import "./aboutus.scss";

class AboutUs extends Component {
  render() {
    return (

      <section className="AboutUs-tease">
        
          <div className="content">
          
            <div id="blue-rectangle"></div>
            
            <Row>
              <div className="who-are-we-content">
                <AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
                  <div className="title">Who are We?</div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
                  <div className="description">
                    We are a chapter of Association for Computing Machinery at
                    California State University, Los Angeles. We bring students with
                    a common passion and devotion into the field of computing.
                  </div>
                </AnimationOnScroll>
              </div>
            </Row>
            
            <Row>
              <div className="link-btn">
                <AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
                  <a className="label px-5" href="/aboutus">
                    Learn more
                  </a>
                </AnimationOnScroll>
              </div>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xs={11} sm={10} lg={8} xl={7}>
                <AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
                  <Image src={require('./images/FirstGeneralMeetingFall2022.jpg')} fluid />
                </AnimationOnScroll>
              </Col>
            </Row>
          </div>
        
          {/* <div className="left">
            <div className="content">
              <div className="subTitle"> acm@calstatela </div>
              <div className="title"> Who are we? </div>
              <div className="description">
                {" "}
                We’re a chapter of Association for Computing Machinery at
                California State University, Los Angeles. We bring students with
                a common passion and devotion into the field of computing.{" "}
              </div>
              <div className="link-btn mt-4">
                <a className="label px-5" href="/aboutus">
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="right"></div> */}
      </section>
      
    );
  }
}

export default AboutUs;