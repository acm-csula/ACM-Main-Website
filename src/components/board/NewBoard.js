import React from "react";
import { useEffect, useState } from "react";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import { firebase, db } from "../professional-events/firebaseConfig.js";
import {
  collection,
  collectionGroup,
  getDocs,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";
import logo from "./img/acm_logo.png";
import BoardLeaders from "./BoardLeaders";
const NewBoard = () => {
  const [currentBoard, setBoard] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const board = query(
          collectionGroup(db, "acm_board"),
          orderBy("year", "asc")
        );
        const boardSnapshot = await getDocs(board);

        if (isMounted) {
          const boardList = [];
          boardSnapshot.forEach((doc) => {
            const boardItem = { id: doc.id, ...doc.data() };
            boardList.push(boardItem);
          });
          setBoard(boardList.at(boardList.length - 1));
        }
      } catch (err) {
        console.log("Error occured when fetching board", err);
      }
    };
    fetchData();

    return () => {
      // Cleanup function to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div className="board-header-container">
        <div id="board-header-title">
          The team that makes ACM special at CalStateLA
          <br></br>
          Meet our leaders!
        </div>
      </div>
      {currentBoard && (
        <div class="boardcontainer pt-3">
          <h1 class="mx-auto text-light py-3" align="center">
            ACM Leaders of {currentBoard.schoolyear}
          </h1>
          <div class="bottomheader mx-auto" align="center"></div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="board">
            <Row className="mx-auto">
              <Col md={3}>
                <Nav
                  variant="pills"
                  className="board-tab-container flex-column"
                >
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="board">Board</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="officer">Officers</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="committee">Committees</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="advisor">Advisors</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9}>
                <Tab.Content className="m-0 w-100">
                  <Tab.Pane eventKey="board">
                    <h2 class="groupheader text-light">Board</h2>
                    <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                      <BoardLeaders
                        leader={currentBoard.leaders.board.president}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.vicepresident}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.secretary}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.treasurer}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.vp_affairs1}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.vp_affairs2}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.webmaster}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.proj_manager1}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.proj_manager2}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="officer">
                    <h2 class="groupheader text-light">Officers</h2>
                    <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                      {Object.keys(currentBoard.leaders.officers).map((group) =>
                        currentBoard.leaders.officers[group].map((member) => (
                          <BoardLeaders leader={member} />
                        ))
                      )}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="committee">
                    {Object.keys(currentBoard.leaders.committee).map(
                      (group) => (
                        <>
                          <h3 class="text-light" align="center">
                            {group}
                          </h3>
                          <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                            {currentBoard.leaders.committee[group].map(
                              (member) => (
                                <BoardLeaders leader={member} />
                              )
                            )}
                          </div>
                        </>
                      )
                    )}
                  </Tab.Pane>
                  <Tab.Pane eventKey="advisor">
                    <h2 class="groupheader text-light">Advisors</h2>
                    <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                      {currentBoard.leaders.advisors &&
                        currentBoard.leaders.advisors.map((advisor) => (
                          <BoardLeaders leader={advisor} />
                        ))}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      )}
    </div>
  );
};

export default NewBoard;
