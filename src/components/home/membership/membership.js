import React, { Component } from "react";
import "./membership.scss";
import logo from './images/acmlogo1.png';
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import "animate.css/animate.min.css";
// import { Col, Row } from "react-bootstrap";


class Membership extends Component {
  render() {
    return (
      
        <section className="Membership-tease">
          <div className="container">
            <img id="logoImage" className="mt-5" src={logo} alt="logo"/>
            <div className="title mt-3">Become a Binary</div>
            <div className="description">
              Join Cal State LA’s largest computer science community. Members receive many benefits, 
              including professional development, career growth and networking opportunities.
            </div>
            <div className="link-btn">
              <a className="label px-5" href="/membership">Join Today</a>
            </div>
          </div>
          {/* <div className="left">
            <div className="content">
              <div className="subTitle"> membership </div>
              <div className="title"> Become a binary </div>
              <div className="description">
                {" "}
                Become part of Cal State LA’s largest computer science
                community. Members receive many benefits, including professional
                development, career growth and networking opportunities.{" "}
              </div>
              <div className="link-btn mt-4">
                <a className="label px-5" href="/membership">
                  join today
                </a>
              </div>
            </div>
          </div>
          <div className="right"></div> */}
        </section>
      // <AnimationOnScroll animateIn="animate__fadeInLeft" delay="1"animateOnce="true">
      // </AnimationOnScroll>
    );
  }
}

export default Membership;