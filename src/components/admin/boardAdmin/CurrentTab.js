import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import BoardLeaders from "../../board/BoardLeaders";
const CurrentTab = (props) => {
  return (
    <div class="current-boardtab mx-auto">
      <Row>
        <Card className="board-cards">
          <Card.Header>Board</Card.Header>
          <Card.Body className="row container mx-auto">
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.president}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vicepresident}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.secretary}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.treasurer}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vp_affairs1}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vp_affairs2}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.webmaster}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.proj_manager1}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.proj_manager2}
            />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className="board-cards">
          <Card.Header>Officers</Card.Header>
          <ListGroup variant="flush">
            {props.data.leaders.officers.map((group) => (
              <ListGroup.Item variant="flush" key={group.role_group}>
                {group.role_group}
                <Card.Body className="row container mx-auto">
                  {group.members.map((member) => (
                    <BoardLeaders
                      className="col-md-6"
                      enableEdit={true}
                      leader={member}
                    />
                  ))}
                </Card.Body>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Row>
      <Row>
        <Card className="board-cards">
          <Card.Header>Committee</Card.Header>
          <ListGroup variant="flush">
            {props.data.leaders.committee.map((group) => (
              <ListGroup.Item variant="flush" key={group.role_group}>
                {group.role_group}
                <Card.Body className="row container mx-auto">
                  {group.members.map((member) => (
                    <BoardLeaders
                      className="col-md-6"
                      enableEdit={true}
                      leader={member}
                    />
                  ))}
                </Card.Body>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Row>
      <Row>
        <Card className="board-cards">
          <Card.Header>Advisors</Card.Header>
          <Card.Body className="row container mx-auto">
            {props.data.leaders.advisors.map((advisor) => (
              <BoardLeaders
                className="col-md-6"
                enableEdit={true}
                leader={advisor}
              />
            ))}
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default CurrentTab;
