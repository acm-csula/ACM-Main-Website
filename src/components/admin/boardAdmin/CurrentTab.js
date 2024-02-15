import React from "react";
import { useState } from "react";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import BoardLeaders from "../../board/BoardLeaders";
import AddMembers from "./modals/AddMembers";
import AddGroup from "./modals/AddGroup";
const CurrentTab = (props) => {
  const [addModal, setAddModal] = useState(null);
  const [groupModal, setGroupModal] = useState(null);
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
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.president };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vicepresident}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.vicepresident };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.secretary}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.secretary };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.treasurer}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.treasurer };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vp_affairs1}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.vp_affairs1 };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.vp_affairs2}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.vp_affairs2 };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.webmaster}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.webmaster };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.proj_manager1}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.proj_manager1 };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
            <BoardLeaders
              className="col-md-6"
              enableEdit={true}
              leader={props.data.leaders.board.proj_manager2}
              imgs={props.imgs}
              onUpdate={(leaderData) => {
                const section = { section: "board" };
                const oldLeader = { oldLeader: props.data.leaders.board.proj_manager2 };
                props.onUpdate({ ...leaderData, ...oldLeader, ...section });
              }}
              onDelete={(leaderData) => {
                const section = { section: "board" };
                props.onDelete({ ...leaderData, ...section });
              }}
            />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className="board-cards">
          <Card.Header>
            Officers
            <Button
              onClick={() => {
                setSection("officers");
                setAddModal(true);
              }}
            >
              Add Officer
            </Button>
            <Button
              onClick={() => {
                setSection("officers");
                setGroupModal(true);
              }}
            >
              Add new group
            </Button>
          </Card.Header>
          <ListGroup variant="flush">
            {Object.keys(props.data.leaders.officers).map((groupKey) => (
              <ListGroup.Item variant="flush" key={groupKey}>
                {groupKey}
                <Card.Body className="row container mx-auto">
                  {props.data.leaders.officers[groupKey].map((member) => (
                    <BoardLeaders
                      className="col-md-6"
                      enableEdit={true}
                      leader={member}
                      imgs={props.imgs}
                      onUpdate={(leaderData) => {
                        const section = { section: "officers" };
                        const r_group = { role_group: groupKey };
                        const oldLeader = { oldLeader: member };
                        props.onUpdate({
                          ...leaderData,
                          ...section,
                          ...r_group,
                          ...oldLeader,
                        });
                      }}
                      onDelete={(leaderData) => {
                        const section = { section: "officers" };
                        const r_group = { role_group: groupKey };
                        props.onDelete({
                          ...leaderData,
                          ...section,
                          ...r_group,
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
            <Button
              onClick={() => {
                setSection("committee");
                setGroupModal(true);
              }}
            >
              Add new group
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
                      imgs={props.imgs}
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
                      onDelete={(leaderData) => {
                        const section = { section: "committee" };
                        const r_group = { role_group: groupKey };
                        props.onDelete({
                          ...leaderData,
                          ...section,
                          ...r_group,
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
            Advisors{" "}
            <Button
              onClick={() => {
                setSection("advisors");
                setAddModal(true);
              }}
            >
              Add Advisors
            </Button>
          </Card.Header>
          <Card.Body className="row container mx-auto">
            {props.data.leaders.advisors.map((advisor) => (
              <BoardLeaders
                className="col-md-6"
                enableEdit={true}
                leader={advisor}
                imgs={props.imgs}
                onUpdate={(leaderData) => {
                  const section = { section: "advisors" };
                  const oldLeader = { oldLeader: advisor };
                  props.onUpdate({ ...leaderData, ...section, ...oldLeader });
                }}
                onDelete={(leaderData) => {
                  const section = { section: "advisors" };
                  props.onDelete({ ...leaderData, ...section });
                }}
              />
            ))}
          </Card.Body>
        </Card>
      </Row>
      {currentSection && (
        <>
          <AddMembers
            data={props.data}
            onHide={() => setAddModal(false)}
            show={addModal}
            imgs={props.imgs}
            section={currentSection}
            roleGroups={Object.keys(props.data.leaders.committee)}
            onAdd={props.onAdd}
          />
          <AddGroup
            data={props.data}
            onHide={() => setGroupModal(false)}
            show={groupModal}
            section={currentSection}
          />
        </>
      )}
    </div>
  );
};

export default CurrentTab;
