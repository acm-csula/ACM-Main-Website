import React from 'react'
import {Tabs,Row,Col,Tab,Nav,Container,Button} from 'react-bootstrap'
import ModalImage from './ModalImage'
import 'bootstrap/dist/css/bootstrap.css'
import "./Programs.css"
import Mentorship from './Mentorship'

class Programs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showMentorship1: false,
            showMentorship2: false,
            showTutoring: false
        }
    }

    render() {
        return (
            <div class="programs-body">
                <div class="quote-style-1 quote-bg">
                    <div class="quote-block" style={{'margin-left': '15%', 'margin-right': '15%'}}>
                    <br></br>
                    Get involved!<br></br> Participate in our <span className="highlight-text"><i><b>mentorship!</b></i></span>
                    <br></br>
                    <br></br>
                    </div>
                </div>
                <div class="card programs-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="programs-nav-link anchor-white" eventKey="first">Spring 2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="programs-nav-link anchor-white" eventKey="second">Fall 2019</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>                                
                                <Tab.Content className="programs-tab-content">
                                
                                    <h3><b>Disclaimers!</b></h3>
                                    <span class="disclaimer"><b>1. You must be a member of ACM to participate in the mentorship!</b> If you are not a member, 
                                    <b><i><span class="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                                    <span class="disclaimer"><b>2. Deadline to apply for the Spring 2020 mentorship program is <span class="highlight-text">
                                    Tuesday, February 4, 2020 at 5:00 PM.</span></b></span><br></br>
                                    <span class="disclaimer"><b>3. Changes for Spring 2020: Mentorship is only for <span class="highlight-text">mentees.</span> Tutoring will <span class="highlight-text">not</span> be offered Spring 2020. </b></span><br></br><br></br>
                                    <Tab.Pane eventKey="first">
                                        <Tab.Container defaultActiveKey="mentorship">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link anchor-blue" eventKey="mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">
                                                <Tab.Pane eventKey="mentorship">
                                                    <Mentorship />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Tab.Container defaultActiveKey="mentorship2019">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link anchor-blue" eventKey="mentorship2019">Mentorship</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link anchor-blue" eventKey="tutoring2019">Tutoring</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">
                                                
                                                <Tab.Pane eventKey="mentorship2019">
                                                    <br></br>
                                                    <h2>❖ <span class="highlight-text">Program Description</span></h2><br></br>
                                                    Students in the mentorship program will gain professional and academic skills. They will learn to manage their time,
                                                    stay organized, and tackle intimidating assignments. They will also gain confidence, stay motivated, and learn to give advice.<br></br><br></br>

                                                    <h2>❖ <span class="highlight-text">Mentors and Mentees | Winners of Mentorship Competition</span></h2><br></br>

                                                    <Container>
                                                        <img src={require('./pictures/fall2019_mentors_mentees.jpg')} onClick={() => this.setState({showMentorship1: true})} class="programs-images"></img>
                                                        <img src={require('./pictures/fall2019_best_mentors_mentees.jpg')} onClick={() => this.setState({showMentorship2: true})} class="programs-images"></img>
                                                        <ModalImage image='./pictures/fall2019_mentors_mentees.jpg' show={this.state.showMentorship1} onHide={() => this.setState({ showMentorship1: false })} />
                                                        <ModalImage image='./pictures/fall2019_best_mentors_mentees.jpg' show={this.state.showMentorship2} onHide={() => this.setState({ showMentorship2: false })} />
                                                    </Container>
                                                    
                                                </Tab.Pane>
                                            </Tab.Content>
                                            <Tab.Content className="programs-tab-content">
                                                
                                                <Tab.Pane eventKey="tutoring2019">
                                                    <br></br>
                                                    <h2>❖ <span class="highlight-text">Program Description</span></h2><br></br>
                                                    Tutors assist students in their introductory computer science and math classes. We provide additional insight on concepts that students are learning in their classes and 
                                                    helpful tips on assignments. Academic success is very important!<br></br><br></br>

                                                    <h2>❖ <span class="highlight-text">Tutoring</span></h2><br></br>

                                                    <Container>
                                                        <img src={require('./pictures/tutoring.PNG')} onClick={() => this.setState({showTutoring: true})} class="programs-images"></img>
                                                        <ModalImage image='./pictures/tutoring.PNG' show={this.state.showTutoring} onHide={() => this.setState({ showTutoring: false })} />
                                                    </Container>
                                                    
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>                                        
                                    </Tab.Pane>                            
                                </Tab.Content>
                            </Col>
                        </Row>
					</Tab.Container><br></br>
                </div>
            </div>
        );
    }
}

export default Programs