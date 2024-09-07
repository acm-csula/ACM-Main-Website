import React from 'react'
import "./membership.css"
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
//import Carousel from 'react-bootstrap/Carousel';
import Regular from './CheckoutComponents/RegularCheckout.js'

class Membership extends React.Component {

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div id="membership-body">
				<div>
					<div className="membership-text">
						<p>Interested? Join our club!</p>
					</div>
					<div className="membership-card"></div>
				</div>
				<div className="card mem-card">
					{/* <center>
						<div className="carousel_container" style={{ display: 'flex', justifyContent: 'center' }}>
							<Carousel>
								<Carousel.Item>
									<img
										// className="d-block image"
										className="image"
										src={require('./images/jpl-tour.png')} fluid
										alt="ACM Cal State LA members touring JPL"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										// className="d-block image"
										className="image"
										src={require('./images/space-invaders.png')} fluid
										alt="ACM Cal State LA Space Invaders Workshop"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										// className="d-block image"
										className="image"
										src={require('./images/accord-workshop.png')} fluid
										alt="ACM Cal State LA Accord Workshop"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										// className="d-block image"
										className="image"
										src={require('./images/hackathon.png')} fluid
										alt="ACM Cal State LA Hackathon"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										// className="d-block image"
										className="image"
										src={require('./images/movie-fundraiser.png')} fluid
										alt="ACM Cal State LA Movie Fundraiser"
									/>
								</Carousel.Item>
							</Carousel>
						</div>
					</center> */}
					<div className = "member-card-header">
						<Card.Header className="join-card-header text-center">
							<h2><span className="highlight-text"><b><i>ACM Membership 2024-2025</i></b></span></h2>
						</Card.Header>
					</div>
					<div className="member-body">
						<Card.Body style={{ backgroundColor: "#00000000", scale: "95%" }}>
							<Regular />
						</Card.Body>
					</div>
					<br></br>
				</div>
				<div class="quote-style-2 membership-footer-text">
					<span
						className="highlight-text"><i>Thank you for your support!</i>
					</span>
				</div>
			</div>
		)
	}
}

export default Membership;