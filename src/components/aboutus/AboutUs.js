import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Image, Button, Accordion, Card } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./aboutus.css";
// balls
class AboutUs extends React.Component {
	render() {
		let acmImages = ["./images/2021_2022_leaders.jpg", "./images/group.jpg"]
		let acmImageCaptions = ["2021-2022 ACM Leaders", "2019-2020 ACM Leaders"]
		return (
			<div>
				<div>
					<div className="about-us-text">
						<p>About Us</p>
					</div>
					<div className="about-us-card"></div>
				</div>
				<Jumbotron>
					{/* <div id="blue-rectangle"></div> */}

					<div className="mission-statement-text">
					<AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
						<h1 className="our-mission-header">Our Mission</h1>
					</AnimationOnScroll>

						<div className="mission-statement-points">
							<ul class="list-group list-group">
								<AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
									<li class="list-group-item mission-statement-item">
										Provide computer science knowledge and resources to students.
									</li>
								</AnimationOnScroll>

								<AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
									<li class="list-group-item mission-statement-item">
										Host programming workshops that teach projects and new technologies outside of classes at CSULA.
									</li>
								</AnimationOnScroll>

								<AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
									<li class="list-group-item mission-statement-item">
										Share knowledge and advice of the computing field in our mentorship program.
									</li>
								</AnimationOnScroll>

								<AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
									<li class="list-group-item mission-statement-item">
										Provide professional development workshops to help members prepare for the workforce.
									</li>
								</AnimationOnScroll>

								<AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
								<li class="list-group-item mission-statement-item">
										Build a community through our events, promoting involvement outside of campus.
									</li>
								</AnimationOnScroll>
									
								<AnimationOnScroll animateIn="animate__fadeIn" delay="1" animateOnce="true">
									<li class="list-group-item mission-statement-item">
										Serve students and those interested in the betterment of our Los Angeles community.
									</li>
								</AnimationOnScroll>
								{/* <li class="list-group-item mission-statement-item">
									Provide computer science knowledge and resources to students.
								</li>

								<li class="list-group-item mission-statement-item">
									Host programming workshops that teach projects and new technologies outside of classes at CSULA.
								</li>

								<li class="list-group-item mission-statement-item">
									Share knowledge and advice of the computing field in our mentorship program.
								</li>

								<li class="list-group-item mission-statement-item">
									Provide professional development workshops to help members prepare for the workforce.
								</li>

								<li class="list-group-item mission-statement-item">
									Build a community through our events, promoting involvement outside of campus.
								</li>

								<li class="list-group-item mission-statement-item">
									Serve students and those interested in the betterment of our Los Angeles community.
								</li>  */ }
							</ul>
						</div>
					</div>
					<div className="carousel-leaders">
						{/* <Carousel infiniteLoop>
							{acmImages.map((value, index) => {
								return <div>
									<img className='carousel-leadergroup-image' src={require('' + value)} alt="leader" />
									<p className="legend">{acmImageCaptions[index]}</p>
								</div>
							})}
						</Carousel> */}
					</div>
				</Jumbotron>
				<div className="bottom-section">
					<div id="about-us-info">
						<Accordion>
							<Card>
								<Accordion.Toggle className="accordian-container" as={Card.Header} eventKey="0">
									<div className="accordian-header-container">
										<h1 className="accordian-header">Who are we? ⏷</h1>
									</div>
								</Accordion.Toggle>

								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Row className="info-row">
											<Col className="info-col" lg={6}>
												<div className="info-content-container">
													<div className="about-text">
														<li className="about-item">
															We are a chapter of the Association for Computing Machinery (ACM) at California State University, Los Angeles (CSULA).
														</li>
														<li className="about-item">
															ACM is the world's largest educational and scientific computing society, delivering resources that advance computing as a science and a profession.
														</li>
														<li className="about-item">
															ACM@CSULA is the largest computer science student organization on campus.
														</li>
														<li className="about-item">
															We bring together students with common interests into the field of computing.
														</li>
													</div>
												</div>
											</Col>
											<Col className="about-us-image" lg={5}><Image src={require('./images/Fall2022Board.jpg')} fluid /></Col>
										</Row>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Accordion.Toggle className="accordian-container" as={Card.Header} eventKey="1">
								<div className="accordian-header-container"><h1 className="accordian-header">What do we offer? ⏷</h1></div>
								</Accordion.Toggle>

								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<Row className="info-row">
											<Col className="info-col" lg={6}>
												<div className="info-content-container">
													<div className="offer-text">
														<li className="offer-item">
															We provide professional development workshops, hackathons, programming competitions, workshops, and more.
														</li>
														<li className="offer-item">
															We invite experienced guest speakers from various companies, including Google, Lockheed Martin, JPL, and more.
														</li>
														<li className="offer-item">
															We host social events like hiking, game nights, and movie nights, for students
															to network and destress from classes.
														</li>
													</div>
												</div>
											</Col>
											<Col className="about-us-image" lg={5}><Image src={require('./images/android-workshop.png')} fluid /></Col>
										</Row>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Accordion.Toggle className="accordian-container" as={Card.Header} eventKey="2">
								<div className="accordian-header-container"><h1 className="accordian-header">How to join ACM ⏷</h1></div>
								</Accordion.Toggle>

								<Accordion.Collapse eventKey="2">
									<Card.Body>
										<Row className="info-row">
											<Col className="info-col" lg={6}>
												<div className="info-content-container">
													<div className="join-text">
														<li className="join-item">
															Although we are an organization focused on computing, interested students, faculty, and alumni of all majors are welcomed.
														</li>
														<li lassName="join-item">
															Join our semester's General Meetings to learn more about the club!
														</li>
														<li lassName="join-item">
															To learn about the benefits of being an ACM member, click the button below:
														</li>
														<Button href="/membership">Membership</Button>
													</div>
												</div>
											</Col>
											<Col className="about-us-image" lg={5}><Image src={require('./images/fall-2019-general-meeting.jpg')} fluid /></Col>
										</Row>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Accordion.Toggle className="accordian-container" as={Card.Header} eventKey="3">
									<div className="accordian-header-container"><h1 className="accordian-header">Our Constitution ⏷</h1></div>
								</Accordion.Toggle>

								<Accordion.Collapse eventKey="3">
									<Card.Body>
										<Row className="info-row">
											<Col className="info-col" lg={6}>
												<div className="info-content-container">
													<div className="constitution-text">
														<li className="constitution-item">
															Interested in learning more about what governs our club?
														</li>
														<li className="constitution-item">
															Feel free to take a look at our Constitution:
														</li>
														<Button href="https://drive.google.com/file/d/1IyTQtJmeOupbVVq_zp9Fdr-0k4jyDHSa/view?usp=sharing" target="_blank">Constitution</Button>
													</div>
												</div>
											</Col>
											<Col className="about-us-image" lg={4}><Image src={require('./images/logo.png')} fluid /></Col>
										</Row>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;