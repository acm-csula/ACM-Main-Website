import React from 'react'
import "./contactus.css"
import {Tabs,Row,Col,Tab,Nav,Container,Button,Card} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebookF, faDiscord} from "@fortawesome/free-brands-svg-icons"
import logo from './acmlogo1.png';

class ContactUs extends React.Component {
	render() {
		return (
			<div>
				<div class="contact-us-card">
					<Card className="text-center">
						<img
							src={logo}
							class="contact-us-logo"
							alt="ACM logo"
						/>
						<p>
							Reach us at: <a href="mailto:acm.calstatela@gmail.com" target="_top">acm.calstatela@gmail.com</a>
						</p>
						<p>Office Hours: Thursdays, 3 - 4 pm @ET C-245</p>
						<p>For any appointments, email us on the email provided.</p>
					</Card>
				</div>

				<div class="contact-us-card">
					<Card className="text-center">
						<p>SOCIAL MEDIA</p>
						<div>
							<a href="https://www.instagram.com/calstatela_acm/?hl=en"> <FontAwesomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon></a>
							<a href="https://www.facebook.com/calstatela.acm"> <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon></a>
							<a href="https://discordapp.com/invite/wX58JRv"><FontAwesomeIcon  className="iconBrand" size="2x" icon={faDiscord}></FontAwesomeIcon></a>
						</div>
					</Card>
				</div>

				<div class="contact-us-card">
					<Card className="text-center" text="white">
						<h1>Contact Us</h1>
						<form action="mailto:acm.calstatela@gmail.com?Subject=Contacting%20You%20From%20Website" method="POST" enctype="text/plain">
							<div class="txtb">
								<label for="name" class="card-bg">Full Name :</label>
								<input type="text" id="name" name="name" class="card-bg" placeholder="Enter Your Name" />
							</div>

							<div class="txtb">
								<label for="email" class="card-bg">Email: </label>
								<input type="text" id="email" name="email" class="card-bg" placeholder="Enter Your Email" />
							</div>

							<div class="txtb">
								<label for="phoneNo" class="card-bg">Phone Number :</label>
								<input type="text" id="phoneNo" name="phoneNo" class="card-bg" placeholder="Enter Your Phone Number" />
							</div>

							<div class="txtb">
								<label for="message" class="card-bg">Message: </label>
							<textarea id="body" name="message" class="card-bg"></textarea>
							</div>
							<input type="submit" value="Send" id="btn-form" />
						</form>
					</Card>
				</div>
			</div>
		)
	}
}

export default ContactUs