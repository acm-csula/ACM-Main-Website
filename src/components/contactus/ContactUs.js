import React from "react";
import "./contactus.css";
import { Card } from "react-bootstrap";
import logo from "./images/acmlogo1.png";
import instagram from "./images/ig-logo.png";
import facebook from "./images/fb-logo.png";
import discord from "./images/discord-logo.png";
import Dropdown from "react-bootstrap/Dropdown";

class ContactUs extends React.Component {
  render() {
    return (
      <>
        <div className="contact-us-page">
          <div className="contact-us-card">
            <Card className="text-center">
              <img src={logo} className="contact-us-logo" alt="ACM logo" />

              <div className="contact-us-block">
                <h1>Social Media</h1>
                <a href="https://www.instagram.com/calstatela_acm/?hl=en">
                  {/* <FontAwesnomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon> */}
                  <img
                    src={instagram}
                    className="contact-us-logo-2"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.facebook.com/calstatela.acm">
                  {/* <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon> */}
                  <img
                    src={facebook}
                    className="contact-us-logo-2"
                    alt="Facebook"
                  />
                </a>
                <a href="https://discordapp.com/invite/wX58JRv">
                  {/* <FontAwesomeIcon  className="iconBrand" size="2x" icon={faDiscord}></FontAwesomeIcon> */}
                  <img
                    src={discord}
                    className="contact-us-logo-2"
                    alt="Discord"
                  />
                </a>
              </div>
            </Card>
          </div>
          <div className="faq-card">
            <Card text="white">
              <h1 className="text-center border-bottom">FAQ</h1>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    className="dropdown-basic text-center border-bottom"
                  >
                    <h2>Why should I join ACM?</h2>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    className="dropdown-basic text-center border-bottom"
                  >
                    <h2>How much is the membership fee?</h2>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Memebership fee is $5 for the entire year
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card>
          </div>

          <div className="contact-us-card">
            <Card className="text-center" text="white">
              <div className="contact-us-block">
                <h1>Contact Us</h1>
                <form
                  action="mailto:acm.calstatela@gmail.com?Subject=Contacting%20You%20From%20Website"
                  method="POST"
                  enctype="text/plain"
                >
                  <div className="txtb">
                    <label for="name" className="card-bg">
                      Full Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="card-bg"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="txtb">
                    <label for="email" className="card-bg">
                      Email:{" "}
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="card-bg"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="txtb">
                    <label for="phoneNo" className="card-bg">
                      Phone Number :
                    </label>
                    <input
                      type="text"
                      id="phoneNo"
                      name="phoneNo"
                      className="card-bg"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                  <div className="txtb">
                    <label for="message" className="card-bg">
                      Message:{" "}
                    </label>
                    <textarea
                      id="body"
                      name="message"
                      className="card-bg"
                    ></textarea>
                  </div>
                  <input type="submit" value="Send" id="btn-form" />
                </form>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
