import React from 'react'
import {Tabs,Row,Col,Tab,Nav,Container,Button,Jumbotron} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"
import LegacyProject from './LegacyProject'
import NewProject from './NewProject'

class Projects extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <div class="project-body">
                {/* <div class="quote-style-1 quote-bg">
                    <div class="quote-block" style={{'margin-left': '15%', 'margin-right': '15%'}}>
                    <br></br>
                    Looking for experience?<br></br> Participate in our <span className="highlight-text"><i><b>projects and programs!</b></i></span>
                    <br></br>
                    <br></br>
                    </div>
                </div> */}
                <div>
                    <div className="project-title-text">
                    <p></p>
                        <p>Looking for experience?</p>
                        <p>Participate in our <span className="emphasis">projects</span>!</p>
                    </div>
                    <div className="project-title-card"></div>
                </div>
                <Jumbotron>
                <div>
                    <h3 class="disclaimer_header"><b>Disclaimer!</b></h3>
                    <span class="disclaimer"><b>1. You must be a member of ACM to participate in the projects!</b> If you are not a member, 
                    <b><i><span class="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                    <span class="disclaimer"><b>2. Admittance to these projects are <span class="highlight-text">first come, first served.
                    </span></b> Space is limited in these projects, so you are advised to attend the First General Meeting to secure 
                    yourself a spot in the project of your choosing.</span><br></br>
                    <span class="disclaimer"><b>3. The deadline to apply to the Fall 2020 projects is <i><span class="highlight-text">
                    Saturday, September 5, 2020 at 6:00 PM.</span></i></b></span><br></br>
                    <br></br><br></br>
                </div>
                
                

                <div class="card project-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="fall2020projects">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="fall2020projects">Fall 2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="spring2020projects">Spring 2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="fall2019projects">Fall 2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="spring2019projects">Spring 2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="fall2018projects">Fall 2018</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>                                
                                <Tab.Content className="project-tab-content">
                                
                                {/* <h3><b>Disclaimer!</b></h3>
                                    <span class="disclaimer"><b>1. You must be a member of ACM to participate in the projects!</b> If you are not a member, 
                                    <b><i><span class="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                                    <span class="disclaimer"><b>2. Admittance to these projects are <span class="highlight-text">first come, first served.
                                    </span></b> Space is limited in these projects, so you are advised to attend the First General Meeting to secure 
                                    yourself a spot in the project of your choosing.</span><br></br>
                                    <span class="disclaimer"><b>3. The deadline to apply to the Spring 2020 projects is <i><span class="highlight-text">
                                    Sunday, February 9th, 2020 at 6:00 PM.</span></i></b></span><br></br>
                                    <br></br><br></br> */}
                                    <Tab.Pane eventKey="fall2020projects">
                                        <Tab.Container defaultActiveKey="F2020beginner">                                            
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="F2020beginner">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="F2020advanced">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="F2020beginner">
                                                    <NewProject
                                                        opener="Want to learn how to advertise your skillset in a tech-savvy way?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Personal Website is a beginner’s project that requires little to no programming experience. If you have no coding experience or you are just interested in coding, then this is the perfect project for you. In this project, you will create your own personal website. This project is an excellent way to create a portfolio to showcase your art or promote yourself. You can even create your own blog and design the website however you like. The technologies that you will learn will include: HTML, CSS, JavaScript, and Bootstrap."
                                                        technologies={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                                                        poster="./spring2020/Personal Website.png"
                                                        linkToSignUp="https://docs.google.com/forms/d/e/1FAIpQLSePO_VbTGlI838nY0oXqDpQDGC6GZ6guEMwJqrHHp32gR3-ag/viewform"
                                                        //Use '/' not '-' for dates to prevent issues on Firefox.
                                                        openDate="01/28/2020"
                                                        opentime="14:59:59"
                                                        deadlineDate="02/09/2020"
                                                        deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Srivats V.png", "./leaders/Giovanni C.png", "./leaders/Kevin F.JPG"]}
                                                        projectLeaders={["Srivats Venkataraman", "Giovanni Castellanos", "Kevin Flores"]}
                                                        />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="F2020advanced">
                                                    <NewProject
                                                        opener="Space Invaders, but with extra steps!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Space Invaders Part II is a game development project, which is a continuation of last semester's project. New features include new bosses, level progressions, and special abilities. This project will contain a lot of object-oriented programming along with some data structures. This project is meant for more experienced programmers who would like a challenge and for those who participated in last semester’s Space Invaders Part I. The technologies and language used will be Python and Pycharm."
                                                        technologies={["Python", "PyCharm"]}
                                                        poster="./spring2020/Space Invaders 2.0.png"
                                                        linkToSignUp="https://docs.google.com/forms/d/e/1FAIpQLSeZ9Pdvj0luRQgZ7B7JWM8eRA3-xq0Mn9VYH_K59MeKz7ehNw/viewform"
                                                        //Use '/' not '-' for dates to prevent issues on Firefox.
                                                        openDate="01/28/2020"
                                                        opentime="14:59:59"
                                                        deadlineDate="02/09/2020"
                                                        deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Andrew G.png", "./leaders/Elton M.png", "./leaders/Grover.JPG", "./leaders/Luis.JPG"]}
                                                        projectLeaders={["Andrew Gonzalez", "Elton Lin", "John Grover", "Luis Gonzalez"]}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="spring2020projects">
                                        <Tab.Container defaultActiveKey="S2020beginner">                                            
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2020beginner">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2020advanced">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="S2020beginner">
                                                    <LegacyProject
                                                        opener="Want to learn how to advertise your skillset in a tech-savvy way?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Personal Website is a beginner’s project that requires little to no programming experience. If you have no coding experience or you are just interested in coding, then this is the perfect project for you. In this project, you will create your own personal website. This project is an excellent way to create a portfolio to showcase your art or promote yourself. You can even create your own blog and design the website however you like. The technologies that you will learn will include: HTML, CSS, JavaScript, and Bootstrap."
                                                        technologies={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                                                        poster="./spring2020/Personal Website.png"
                                                        projectImages={[
                                                            './spring2020/web1.jpg',
                                                            './spring2020/web2.jpg',
                                                            './spring2020/web3.jpg'
                                                             ]}
                                                        projectLeadersImages={["./leaders/Srivats V.png", "./leaders/Giovanni C.png", "./leaders/Kevin F.JPG"]}
                                                        projectLeaders={["Srivats Venkataraman", "Giovanni Castellanos", "Kevin Flores"]}
                                                        />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="S2020advanced">
                                                    <LegacyProject
                                                        opener="Space Invaders, but with extra steps!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Space Invaders Part II is a game development project, which is a continuation of last semester's project. New features include new bosses, level progressions, and special abilities. This project will contain a lot of object-oriented programming along with some data structures. This project is meant for more experienced programmers who would like a challenge and for those who participated in last semester’s Space Invaders Part I. The technologies and language used will be Python and Pycharm."
                                                        technologies={["Python", "PyCharm"]}
                                                        poster="./spring2020/Space Invaders 2.0.png"
                                                        projectImages={[
                                                            './spring2020/space1.jpg',
                                                            './spring2020/space2.jpg',
                                                            './spring2020/space3.jpg'
                                                             ]}
                                                        projectLeadersImages={["./leaders/Andrew G.png", "./leaders/Elton M.png", "./leaders/Grover.JPG", "./leaders/Luis.JPG"]}
                                                        projectLeaders={["Andrew Gonzalez", "Elton Lin", "John Grover", "Luis Gonzalez"]}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fall2019projects">
                                        <Tab.Container defaultActiveKey="F2019beginner">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="F2019beginner">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="F2019advanced">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">

                                                <Tab.Pane eventKey="F2019beginner">
                                                    <LegacyProject
                                                        opener="Who doesn't enjoy games even a little?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="The instant gratification, the flashy lights, the addictive player-application feedback. In this workshop, we recreated a classic arcade game from the late 70's, Space Invaders, using Python, a high-level programming language that is not only extremely easy to learn but also widely used."
                                                        technologies={['Python', 'PyGame', 'Python', 'Git/Github', 'Did I mention Python...?']}
                                                        poster='./fall2019/beginner.png'
                                                        projectImages={[
                                                            './fall2019/space1.jpg',
                                                            './fall2019/space2.jpg',
                                                            './fall2019/space3.jpg',
                                                            './fall2019/space4.jpg',
                                                            './fall2019/space5.jpg'
                                                             ]}
                                                        projectLeadersImages={['./leaders/Andrew G.png','./leaders/Cristian C.png', './leaders/Elton M.png']}
                                                        projectLeaders={['Andrew Gonzalez', 'Cristian Corrales', 'Elton Lin']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="F2019advanced">
                                                    <LegacyProject 
                                                        opener='Looking for a bit of a challenge?'
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='In this workshop, we created a chat application (a chapplication) using React, a JavaScript web framework that everybody and their grandmas use. Learning how to use React could score you major brownie points to potential recruiters.'
                                                        technologies={['React.js', 'Git/Github', 'Firebase', 'Node.js', 'HTML', 'CSS']}
                                                        poster='./fall2019/intermediate.png'
                                                        projectImages={[
                                                            './fall2019/accord1.jpg', 
                                                            './fall2019/accord2.jpg', 
                                                            './fall2019/accord3.jpg', 
                                                            './fall2019/accord4.jpg'
                                                        ]}
                                                        projectLeadersImages={['./leaders/Emily P.png', './leaders/Ingelbert F.png', './leaders/Srivats V.png', './leaders/Deric K.png']}
                                                        projectLeaders={['Emily Pascua', 'Ingelbert Figueroa', 'Srivats Venkataraman', 'Deric Kwok']}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="spring2019projects">
                                        <Tab.Container defaultActiveKey="S2019beginner">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2019beginner">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2019advanced">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                
                                                <Tab.Pane eventKey="S2019beginner">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='Past attendees of the workshops for this project learned how to create their own website. There are people who make their own websites to advertise themselves, so learning how to make your own website could give you an advantage in the job-hunting scene. Since HTML and CSS, the two technologies that make up many websites, are both fairly easy to learn, these workshops were geared towards beginners. '
                                                        technologies={['HTML5', 'CSS', 'JavaScript', 'Bootstrap']}
                                                        poster='./spring2019/webDev.jpg'
                                                        projectImages={['./spring2019/web1.jpg', './spring2019/web2.jpg', './spring2019/web3.jpg', './spring2019/web4.jpg', './spring2019/web5.jpg', './spring2019/web6.jpg']}
                                                        projectLeadersImages={['./leaders/Deric K.png', './leaders/Brian.jpg']}
                                                        projectLeaders={['Deric Kwok', 'Brian Hernandez']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="S2019advanced">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="The workshops for this project focused on teaching its attendees how to use Android Studio to design and build an Android app. Using Android Studio, past attendees ported ACM's website to an app format. Although creative freedom was limited compared to the beginner's project of this year, workshop attendees had the creative freedom to design the app in any way they wanted. Due to the skills required to operate Android Studio, the workshops were geared towards advanced programmers who already knew the fundamentals of programming with Java."
                                                        technologies={['Android Studio', 'Java']}
                                                        poster='./spring2019/androidDev.jpg'
                                                        projectImages={['./spring2019/android1.jpg', './spring2019/android2.jpg', './spring2019/android3.jpg', './spring2019/android4.jpg', './spring2019/android5.jpg', './spring2019/android6.jpg']}
                                                        projectLeadersImages={['./leaders/Ingelbert F.png', './leaders/Emily P.png', './leaders/Srivats V.png']}
                                                        projectLeaders={['Ingelbert Figueroa', 'Emily Pascua', 'Srivats Venkataraman']}
                                                        />
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>                                        
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fall2018projects">
                                        <Tab.Container defaultActiveKey="F2018beginner">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="F2018beginner">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="F2018advanced">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                
                                                <Tab.Pane eventKey="F2018beginner">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='In the Arduino Car Project, students will design and build their own remote controlled car. Students will learn to use Arduinos and various types of sensors. They will work with software and hardware. '
                                                        technologies={['C++', 'Arduino']}
                                                        poster='./fall2018/fall_2018_flyer.png'
                                                        projectImages={['./fall2018/arduino1.jpg', './fall2018/arduino2.jpg', './fall2018/arduino3.jpg', './fall2018/arduino4.jpg', './fall2018/arduino5.jpg', './fall2018/arduino6.jpg']}
                                                        projectLeadersImages={['./leaders/Brian.jpg', './leaders/Gio G.jpg']}
                                                        projectLeaders={['Brian Hernandez', 'Giovanni Garcia']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="F2018advanced">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="In the Social Media Project, students will collaborate on GitHub to build a social media platform. They will learn to work in teams and be exposed to new technologies. View the project: https://github.com/PranilDahal/Eagle-Post"
                                                        technologies={['Java', 'JavaScript', 'MySQL', 'Vue.js', 'Maven wrapper', 'Git/GitHub version control']}
                                                        poster='./fall2018/fall_2018_flyer.png'
                                                        projectImages={['./fall2018/social1.jpg', './fall2018/social2.jpg', './fall2018/social3.jpg']}
                                                        projectLeadersImages={['./leaders/Pranil.jpg']}
                                                        projectLeaders={['Pranil Dahal']}
                                                        />
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>                                        
                                    </Tab.Pane>                                        
                                </Tab.Content>
                            </Col>
                        </Row>
					</Tab.Container><br></br>
                </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Projects