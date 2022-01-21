import React from "react";
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.css";
import "./board.css";

import BoardLeaders from './BoardLeaders'
import IMAGES from './BoardImage.js'

class Board extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="board-text">
            <p>Our Board</p>
          </div>
          <div className="board-card"></div>
        </div>
        <div className="body container">
          <Jumbotron className="row leaders-div">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-link anchor-white" eventKey="first">2021-2022</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-link anchor-white" eventKey="second">2020-2021</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-link anchor-white" eventKey="third">2019-2020</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-link anchor-white" eventKey="fourth">2018-2019</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Row>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Tab.Container>
                        <div className="row-leaders all-row-leaders">
                          <h2 className="leader-header">LEADER OF THE MONTH</h2>
                          <div className="col-leaders justify-content-center image-contain">
                            <img className="board-leader-winner board-leader-profile" src={IMAGES.Ashley2021} alt={"Leader of the Month"}></img>
                          </div>
                          <h2 className="leader-info">Ashley Tran</h2>
                          <h2 className="leader-info">Executive Officer</h2>
                        </div>
                      </Tab.Container>
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">
                          ACM 2021-2022 BOARD
                        </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Alvin2021} firstName="Alvin" lastName="Lew" year="2021" position="President" />
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="" position="Vice President" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Ashley2021} firstName="Ashley" lastName="Tran" year="2021" position="Treasurer" />
                          <BoardLeaders photo={IMAGES.Sebastian2021} firstName="Sebastian" lastName="Luna" year="2021" position="Secretary" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2021" position="Project Manager" />
                          <BoardLeaders photo={IMAGES.Anthony2020} firstName="Anthony" lastName="Viramontes" year="2021" position="Webmaster" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2021" position="VP of Internal Affairs" />
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2021" position="VP of External Affairs" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">OFFICERS</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Branden2021} firstName="Branden" lastName="Zamora" year="2021" position="Finance Officer" />
                          <BoardLeaders photo={IMAGES.Alexander2021} firstName="Alexander" lastName="Vasquez" year="2021" position="Executive Officer" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Patrick2021} firstName="Patrick" lastName="Sangalang" year="2021" position="Web Officer" />
                          <BoardLeaders photo={IMAGES.Nshan2021} firstName="Nshan" lastName="Kazaryan" year="2021" position="Project Officer" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Robert2021} firstName="Robert" lastName="de la Costa" year="2021" position="Project Officer" />
                          <BoardLeaders photo={IMAGES.Daniel2021} firstName="Daniel" lastName="Ramirez" year="2021" position="Administrative Officer" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.James2021} firstName="James" lastName="Ybarra" year="2021" position="Administrative Officer" />
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="" position="Executive Officer" />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">COMMITTEE</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Tracy2021} firstName="Tracy" lastName="Truong" year="2021" position="Design Committee" />
                          <BoardLeaders photo={IMAGES.Lillian2021} firstName="Lillian" lastName="Leung" year="2021" position="Design Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Fabio" lastName="Carrasco" year="2021" position="Web Committee" />
                          <BoardLeaders photo={IMAGES.Ryan2021} firstName="Ryan" lastName="Lee" year="2021" position="Web Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Spiro2021} firstName="Spiro" lastName="Bogdanos" year="2021" position="Web Committee" />
                          <BoardLeaders photo={IMAGES.Vacant} firstName="LLoyd" lastName="Castro" year="2021" position="Web Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Sean2021} firstName="Sean" lastName="Chung" year="2021" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Elizabeth2021} firstName="Elizabeth" lastName="Silvestre" year="2021" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Roberto2021} firstName="Roberto" lastName="Ruiz-Garcia" year="2021" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Jose2021} firstName="Jose" lastName="Zamora" year="2021" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Gerardo" lastName="Ibarra" year="2021" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Max" lastName="Guzman" year="2021" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.LuisRosas2021} firstName="Luis" lastName="Rosas" year="2021" position="Project Committee" />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">ADVISORS</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Weronika2021} firstName="Weronika" lastName="Cwir" year="2021" position="Faculty Advisor" />
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Keenan" lastName="Knaur" year="2021" position="Faculty Advisor" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Wilson2021} firstName="Wilson" lastName="Thomas" year="2020" position="Advisor" />
                          <BoardLeaders photo={IMAGES.Kalvin2021} firstName="Kalvin" lastName="Mateo" year="2020" position="Student Advisor" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Nidhi2021} firstName="Nidhi" lastName="Lakshmanan" year="2020" position="Student Advisor" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">
                          ACM 2020-2021 BOARD
                        </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Srivats2020} firstName="Srivats" lastName="Venkataraman" year="2020" position="President" />
                          <BoardLeaders photo={IMAGES.Grace2020} firstName="Grace" lastName="Lin" year="2020" position="Vice President" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Nidhi2020} firstName="Nidhi" lastName="Lakshmanan" year="2020" position="Treasurer" />
                          <BoardLeaders photo={IMAGES.Elton2020} firstName="Elton" lastName="Lin" year="2020" position="Secretary" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Rita2020} firstName="Rita" lastName="Sanchez" year="2020" position="VP of Internal Affairs" />
                          <BoardLeaders photo={IMAGES.Grover2020} firstName="John" lastName="Grover" year="2020" position="VP of External Affairs" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Luis2020} firstName="Luis" lastName="Gonzalez" year="2020" position="Project Manager" />
                          <BoardLeaders photo={IMAGES.DavidT2020} firstName="David" lastName="Tang" year="2020" position="Webmaster" />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Julio2020} firstName="Julio" lastName="Santamaria" year="2020" position="Social Media Officer" />
                        <BoardLeaders photo={IMAGES.Anthony2020} firstName="Anthony" lastName="Viramontes" year="2020" position="Web Officer" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Alvin2020} firstName="Alvin" lastName="Lew" year="2020" position="Project Officer" />
                        <BoardLeaders photo={IMAGES.Jorge2020} firstName="Jorge" lastName="Mata" year="2020" position="Project Officer" />
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Tracy2020} firstName="Tracy" lastName="Truong" year="2020" position="Design Committee" />
                          <BoardLeaders photo={IMAGES.DavidM2020} firstName="David" lastName="Melendez" year="2020" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Gregory2020} firstName="Gregory" lastName="Celestino" year="2020" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Lillian2020} firstName="Lillian" lastName="Leung" year="2020" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Omar2020} firstName="Omar" lastName="Eclicerio" year="2020" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Robert2020} firstName="Robert" lastName="de la Costa" year="2020" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Sameen2020} firstName="Sameen" lastName="Khan" year="2020" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Adrian2020} firstName="Adrian" lastName="Lopez" year="2020" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Daniel2020} firstName="Daniel" lastName="Ramirez" year="2020" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Erica2020} firstName="Erica" lastName="Santos" year="2020" position="Project Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Sean2020} firstName="Sean" lastName="Chung" year="2020" position="Project Committee" />
                          <BoardLeaders photo={IMAGES.Ralph2020} firstName="Ralph" lastName="Belleca" year="2020" position="Web Committee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Kenny" lastName="Luong" year="2020" position="Web Comittee" />
                          <BoardLeaders photo={IMAGES.Patrick2021} firstName="Patrick" lastName="Sangalang" year="2020" position="Web Comittee" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Sebastian" lastName="Luna" year="2020" position="General Committee" />
                          <BoardLeaders photo={IMAGES.Vacant} firstName="Ashley" lastName="Tran" year="2020" position="Finance Committee" />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">ADVISORS</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Randy2020} firstName="Randal" lastName="Moss" year="2020" position="Faculty Advisor" />
                          <BoardLeaders photo={IMAGES.Wilson2020} firstName="Wilson" lastName="Thomas" year="2020" position="Advisor" />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders photo={IMAGES.Kalvin2020} firstName="Kalvin" lastName="Mateo" year="2020" position="Advisor" />
                          <BoardLeaders photo={IMAGES.Cristian2020} firstName="Cristain" lastName="Corrales" year="2020" position="Advisor" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2019-2020 BOARD
                        </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Kalvin2019} firstName="Kalvin" lastName="Mateo" year="2019" position="President" />
                        <BoardLeaders photo={IMAGES.Cristian2019} firstName="Cristian" lastName="Corrales" year="2019" position="Vice President" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.GeovannyH2019} firstName="Geovanny" lastName="Huerta" year="2019" position="Treasurer" />
                        <BoardLeaders photo={IMAGES.Srivats2019} firstName="Srivats" lastName="Venkataraman" year="2019" position="Secretary" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.GioC2019} firstName="Giovanni" lastName="Castellanos" year="2019" position="VP of Internal Affairs" />
                        <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2019" position="VP of External Affairs" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Andrew2019} firstName="Andrew" lastName="Gonzalez" year="2019" position="Project Manager" />
                        <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2019" position="Webmaster" />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Elton2019} firstName="Elton" lastName="Lin" year="2019" position="Administative Officer" />
                        <BoardLeaders photo={IMAGES.Diego2019} firstName="Diego" lastName="Flores" year="2019" position="Finance Officer" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.DavidT2019} firstName="David" lastName="Tang" year="2019" position="Web Officer" />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Deric2019} firstName="Deric" lastName="Kwok" year="2019" position="General Committee" />
                        <BoardLeaders photo={IMAGES.Ayush2019} firstName="Ayush" lastName="Singh" year="2019" position="Outreach Committee" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Kevin2019} firstName="Kevin" lastName="Flores" year="2019" position="Outreach Committee" />
                        <BoardLeaders photo={IMAGES.Grover2019} firstName="John" lastName="Grover" year="2019" position="Project Committee" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Luis2019} firstName="Luis" lastName="Gonzalez" year="2019" position="Project Committee" />
                        <BoardLeaders photo={IMAGES.George2019} firstName="George" lastName="Chan" year="2019" position="Web Committee" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Ralph2019} firstName="Ralph" lastName="Belleca" year="2019" position="Web Committee" />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">ADVISORS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Randy2019} firstName="Randal" lastName="Moss" year="2019" position="Advisor" />
                        <BoardLeaders photo={IMAGES.Wilson2019} firstName="Wilson" lastName="Thomas" year="2019" position="Advisor" />
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2018-2019 BOARD
                        </h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Wilson2018} firstName="Wilson" lastName="Thomas" year="2019" position="President" />
                        <BoardLeaders photo={IMAGES.Pranil2018} firstName="Pranil" lastName="Dahal" year="2019" position="Vice President" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.DavidS2018} firstName="David" lastName="San" year="2019" position="Treasurer" />
                        <BoardLeaders photo={IMAGES.GeovannyH2018} firstName="Geovanny" lastName="Huerta" year="2019" position="Secretary" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.GioG2018} firstName="Giovanni" lastName="Garcia" year="2019" position="VP of Internal Affairs" />
                        <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2019" position="VP of External Affairs" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Brian2018} firstName="Brian" lastName="Hernandez" year="2019" position="Project Manager" />
                        <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2019" position="Webmaster" />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Kalvin2018} firstName="Kalvin" lastName="Mateo" year="2019" position="Administrative Officer" />
                        <BoardLeaders photo={IMAGES.Diego2018} firstName="Diego" lastName="Flores" year="2019" position="Finance Officer" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.GioC2018} firstName="Giovanni" lastName="Castellanos" year="2019" position="Digital Media Officer" />
                        <BoardLeaders photo={IMAGES.Deric2018} firstName="Deric" lastName="Kwok" year="2019" position="Project Officer" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Ryan2018} firstName="Ryan" lastName="Dunning" year="2019" position="Web/Networking Officer" />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Emily2018} firstName="Emily" lastName="Pascua" year="2019" position="Web/Project Committee" />
                        <BoardLeaders photo={IMAGES.Srivats2018} firstName="Srivats" lastName="Venkataraman" year="2019" position="Web/Project Committee" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Ingelbert2018} firstName="Ingelbert" lastName="Figueroa" year="2019" position="Project Committee" />
                        <BoardLeaders photo={IMAGES.Andrew2018} firstName="Andrew" lastName="Gonzalez" year="2019" position="Project Committee" />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders photo={IMAGES.Erving2018} firstName="Erving" lastName="Lopez" year="2019" position="Project Committee" />
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Board;
