import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
const CurrentTab = (props) => {
  return (
    <div class="current-boardtab mx-auto">
      <Row>
        <Card>
          <Card.Header>Board</Card.Header>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Header>Officers</Card.Header>
          <ListGroup variant="flush">
            {props.data.leaders.officers.map((group) => (
              <ListGroup.Item variant="flush" key={group.role_group}>
                {group.role_group}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Header>Committee</Card.Header>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Header>Advisors</Card.Header>
        </Card>
      </Row>
    </div>
  );
};

export default CurrentTab;
