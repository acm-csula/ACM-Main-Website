import React, { useState } from "react";
import "./navi.scss";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./acmlogo1.png";
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Modal,
  NavbarBrand,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faInstagram, faFacebookF, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons"

function ElectionResults() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {" "}
        Election Results{" "}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Congratuations to the future Leaders for the 2023-2024 school year!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          ⭐ President: Keyvan M Kani <br /> ⭐ Vice President: Andres Dominguez{" "}
          <br /> ⭐ Treasurer: Joseph Acosta <br />
          ⭐ Project Manager: Shambhavi Bhandari <br /> ⭐ Project Officers:
          Charlie Dominguez & Thien Ho <br />
          ⭐ Social Media Officer: Ivan Ho <br /> <br /> Thanking all candidates
          that have ran for this election, <br />
          and for everyone that has supported our candidates!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

class Navi extends React.Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          fixed="top"
          id="navb"
          expand="lg"
          variant="dark"
        >
          <Navbar.Brand id="homepage" href="/">
            <img
              src={logo}
              width="90"
              height="50"
              className="d-inline-block align-top"
              alt="ACM logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="about us"
                className="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="/aboutus">
                  <div className="nav-dropdown-text">about us</div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/board">
                  <div className="nav-dropdown-text">our board</div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/faq">
                  <div className="nav-dropdown-text">faq</div>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="programs"
                className="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="/projects">
                  <div className="nav-dropdown-text">project workshops</div>
                </NavDropdown.Item>

                <NavDropdown.Item href="/programs">
                  <div className="nav-dropdown-text">code cracking</div>
                </NavDropdown.Item>

                <NavDropdown.Item href="/professional">
                  <div className="nav-dropdown-text">events</div>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/events">calendar</Nav.Link>
              {/* Uncomment Sponsors page link when pamphlet is received */}
              {/* <Nav.Link href="/sponsor">sponsors</Nav.Link> */}

              <Nav.Link href="/contactus">contact us</Nav.Link>
              {/* <Nav.Link href="/contactus">contact us</Nav.Link> */}
            </Nav>
            <Nav className="socials">
              <Navbar.Brand
                id="instagram"
                href="https://www.instagram.com/calstatela_acm/?hl=en"
              >
                <FontAwesomeIcon
                  className="iconBrandNav"
                  size="2x"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </Navbar.Brand>
              <Navbar.Brand
                id="facebook"
                href="https://www.facebook.com/calstatela.acm"
              >
                <FontAwesomeIcon
                  className="iconBrandNav"
                  size="2x"
                  icon={faFacebookF}
                ></FontAwesomeIcon>
              </Navbar.Brand>
              <Navbar.Brand
                id="discord"
                href="https://discordapp.com/invite/wX58JRv"
              >
                <FontAwesomeIcon
                  className="iconBrandNav"
                  size="2x"
                  icon={faDiscord}
                ></FontAwesomeIcon>
              </Navbar.Brand>
              <Navbar.Brand
                id="LinkedIn"
                href="https://www.linkedin.com/in/acm-cal-state-la-2a92b4260/"
              >
                <FontAwesomeIcon
                  className="iconBrandNav"
                  size="2x"
                  icon={faLinkedin}
                ></FontAwesomeIcon>
              </Navbar.Brand>
            </Nav>
            {/* <div class = "election">
      <ElectionResults />
    </div> */}
            <div class="membership-btn">
              <Nav.Link href="/membership">
                <Button variant="light">Membership</Button>
              </Nav.Link>
            </div>
            {/* <Nav.Link href="https://calstatelaacm-portal.web.app/#/"><Button variant="light">ACM Portal</Button></Nav.Link> */}
          </Navbar.Collapse>
        </Navbar>
        <div class="hover-announcements-background"></div>
        <div class="hover-announcements">
          Join us for our club's Game Night extravaganza on Friday, March 1st!
          It's a fantastic opportunity to earn prizes, connect with fellow members,
          and indulge in some friendly competition.
        </div>
      </>
    );
  }
}

export default Navi;
