import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <Button variant="primary" className="m-2">
          Projects
        </Button>
        <Link to="/admin/events">
          <Button variant="primary" className="m-2">
            Events
          </Button>
        </Link>
        <Link to="/admin/board">
          <Button variant="primary" className="m-2">
            Board
          </Button>
        </Link>
        <Button variant="primary" className="m-2">
          Mentorship
        </Button>
      </div>
    </div>
  );
};

export default Admin;
