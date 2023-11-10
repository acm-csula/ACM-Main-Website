import React from "react";
import { firebase, db } from "../professional-events/firebaseConfig";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tab, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Projects.css";
import CurrentProjects from "./CurrentProjects.js";
import PastProjects from "./PastProjects.js";
import ArchiveProj from "./ArchiveProj.js";

import { collectionGroup } from "firebase/firestore";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjSem: "Current",
      currentProj: null,
      archiveProj: null,
    };

  }

  //fetching projects from database
  async componentDidMount() {
      const projs = collectionGroup(db, "project_workshop")
      const queryWorkshops = await getDocs(projs);
      const project = [];

      queryWorkshops.forEach((doc) => {
        const data = doc.data();
        project.push(data);
      });
      this.setState({ currentProjSem: project.reverse()[0].semester });
      this.setState({ currentProj: project.shift() });
      this.setState({ archiveProj: project });


    

    // fetchEvents();
    // firebase
    //   .firestore()
    //   .collection("project_workshop")
    //   .get()
    //   .then((snapshot) => {
    //     const project = [];
    //     snapshot.forEach((doc) => {
    //       const data = doc.data();
    //       project.push(data);
    //     });
    //     this.setState({ currentProjSem: project.reverse()[0].semester });
    //     this.setState({ currentProj: project.shift() });
    //     this.setState({ archiveProj: project });
    //     console.log(this.state.currentProj);
    //     console.log(this.state.currentProj.level.advanced.flyer);
    //   })
    //   .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="project-body">
        <div className="project-header-container">
          <div id="project-header-title">
            Looking for experience?
            <br></br>
            Participate in our project workshops!
          </div>
        </div>
        {/*
                Remember to update dates in the disclaimer:
                1. Project signups open
                2. Signup deadline
                */}
        <div className="disclaimer-body">
          <h3 className="disclaimer_header mt-4 mb-4">
            <b>Disclaimers...</b>
          </h3>
          <div className="disclaimer">
            <b>
              1. You must be a member of ACM to participate in the projects! If
              you are not a member, you will not be allowed in.
            </b>
          </div>
          <br></br>
          <div className="disclaimer">
            <b>
              2. Space is limited, so admittance to these projects are first
              come, first served.
            </b>
          </div>
          <br></br>
          <div className="disclaimer">
            <b>
              3.{" "}
              <span class="date-disclaimer">
                {" "}
                Sign-ups are officially closed
              </span>
            </b>
          </div>
          <br></br>
          <div className="disclaimer">
            <b>
              4. In archives, have a look on a demo project made by a student.
            </b>
          </div>
          <br></br>
          <div className="disclaimer">
            <b>
              5. In archives, press on the project titles to reveal its detailed information.
            </b>
          </div>
        </div>
        <div className="video-header">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/B6H_Jzp_NB4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {this.state.currentProj && this.state.archiveProj && (
          <Tab.Container defaultActiveKey={this.state.currentProjSem}>
            <Nav className="project-tab-label px-3 pt-3 mx-auto" variant="pills">
              <Nav.Item>
                <Nav.Link
                  className="btn-primary text-center"
                  title="Archive"
                  menuVariant="dark"
                  eventKey="archiveproj"
                >
                  Archive
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="project-nav-link-tab"
                  eventKey={this.state.currentProjSem}
                >
                  {this.state.currentProjSem}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content id="main-content">
              <Tab.Pane eventKey={this.state.currentProjSem}>
                <CurrentProjects current={this.state.currentProj} />
              </Tab.Pane>
              <Tab.Pane eventKey="archiveproj">
                <ArchiveProj archive={this.state.archiveProj} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        )}
      </div>
    );
  }
}

export default Projects;