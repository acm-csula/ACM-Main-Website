import React from "react";
import { useState } from "react";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import BoardLeaders from "../../board/BoardLeaders";
import AddCommittee from "./modals/AddCommittee";
const CurrentTab = (props) => {
  const [addModal, setAddModal] = useState(null);
  const [currentSection, setSection] = useState(null);

  
  return (
    <div class="current-boardtab mx-auto">
      <Row>
        <h1 class="text-light mx-auto">{props.data.schoolyear}</h1>
        <Card className="board-cards">
          <Card.Header>Board</Card.Header>
          <Card.Body className="row container mx-auto">
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.president}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.president,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vicepresident}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.vicepresident,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.secretary}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.secretary,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.treasurer}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.treasurer,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vp_affairs1}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.vp_affairs1,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vp_affairs2}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.vp_affairs2,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.webmaster}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.webmaster,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.proj_manager1}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.proj_manager1,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.proj_manager2}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = {
                  oldLeader: props.data.leaders.board.proj_manager2,
                };
                props.onUpdate({ ...leaderData, ...section, ...oldLeader });
              }}
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
                      onUpdate={(leaderData) => {
                        const section = { section: "officers" };
                        const r_group = { role_group: group.role_group };
                        const oldLeader = { oldLeader: member };
                        props.onUpdate({
                          ...leaderData,
                          ...section,
                          ...r_group,
                          ...oldLeader,
                        });
                      }}
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
          <Card.Header>
            Committee{" "}
            <Button
              onClick={() => {
                setSection("committee");
                setAddModal(true);
              }}
            >
              Add Committee Member
            </Button>
          </Card.Header>
          <ListGroup variant="flush">
            {Object.keys(props.data.leaders.committee).map((groupKey) => (
              <ListGroup.Item variant="flush" key={groupKey}>
                {groupKey}
                <Card.Body className="row container mx-auto">
                  {props.data.leaders.committee[groupKey].map((member) => (
                    <BoardLeaders
                      className="col-md-6"
                      enableEdit={true}
                      leader={member}
                      onUpdate={(leaderData) => {
                        const section = { section: "committee" };
                        const r_group = { role_group: groupKey };
                        const oldLeader = { oldLeader: member };
                        props.onUpdate({
                          ...leaderData,
                          ...section,
                          ...r_group,
                          ...oldLeader,
                        });
                      }}
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
                onUpdate={(leaderData) => {
                  const section = { section: "advisor" };
                  const oldLeader = { oldLeader: advisor };
                  props.onUpdate({ ...leaderData, ...section, ...oldLeader });
                }}
              />
            ))}
          </Card.Body>
        </Card>
      </Row>
      {currentSection && (
        <AddCommittee
          onHide={() => setAddModal(false)}
          show={addModal}
          section={currentSection}
          roleGroups={Object.keys(props.data.leaders.committee)}
        />
      )}
    </div>
  );
};

export default CurrentTab;
