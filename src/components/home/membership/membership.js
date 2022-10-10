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
        </section>

    );
  }
}

export default Membership;
