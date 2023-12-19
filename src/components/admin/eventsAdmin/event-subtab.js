

import React from "react";
import { useState } from "react";
import { Card, Tab, Tabs, Row, Button } from "react-bootstrap";
import ViewModal from "./modals/viewModal";
import EditModal from "./modals/editModal";
import DeleteModal from "./modals/deleteModal";
import './eventsadmin.css';
const EventSubTab = (props) => {
  const [viewModal, setViewModal] = useState(false);
  const [deleteModal, setDelModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <>
      <Row md={4}>
        {props.data &&
          props.data.map((e) => (
            <>
              <Card className="mx-auto my-2 event-card" >
                <Card.Body align="center">
                  <Card.Title className="text-light">{e.altText}</Card.Title>
                  <Button
                    className="mx-1"
                    variant="warning"
                    onClick={() => setViewModal(true)}
                  >
                    View
                  </Button>
                  <Button
                    className="mx-1"
                    variant="danger"
                    onClick={() => setDelModal(true)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="mx-1"
                    variant="dark"
                    onClick={() => setEditModal(true)}
                  >
                    Edit
                  </Button>
                </Card.Body>
              </Card>
              <ViewModal image={e.imgUrl} show={viewModal} onHide={() => setViewModal(false)}/>
              <DeleteModal show={deleteModal} onHide={() => setDelModal(false)}/>
              <EditModal show={editModal} onHide={() => setEditModal(false)}/>
            </>
          ))}
      </Row>
    </>
  );
};

export default EventSubTab;
