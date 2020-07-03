import React from 'react'
import "./contactus.css"
import {Tabs,Row,Col,Tab,Nav,Container,Button,Card,Image} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebookF, faDiscord} from "@fortawesome/free-brands-svg-icons"
import logo from './acmlogo1.png';
import ig_logo from './ig_logo.png'
import fb_logo from './fb_logo.png'
import discord_logo from './discord_logo.png'

class ContactUs extends React.Component {
	render() {
		return (
			<div class="contact-us-page">
				<div class="contact-us-card">
					<Card className="text-center">
						<img
							src={logo}
							class="contact-us-logo"
							alt="ACM logo"
						/>
						<p>
							<b>Reach us at: </b>
							{/* <a href="mailto:acm.calstatela@gmail.com" target="_top">acm.calstatela@gmail.com</a> */}
							acm.calstatela@gmail.com
						</p>
						<p>
							<b>Office Hours:</b> Thursdays, 3-4 pm @ET C-245
						</p>
						<p> 
							<b>UPDATE:</b> Office hours will be online. Contact us for more information.
						</p>
					</Card>
				</div>

				<div class="contact-us-card">
					<Card className="text-center">
					<div>
						<h2>Social Media</h2>
							<a href="https://www.instagram.com/calstatela_acm/?hl=en">
								{/* <FontAwesnomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon> */}
								<img
								src={ig_logo}
								class="contact-us-logo-2"
								alt="IG Logo"
								/>
							</a>
							<a href="https://www.facebook.com/calstatela.acm"> 
							{/* <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon> */}
								<img
								src={fb_logo}
								class="contact-us-logo-2"
								alt="IG Logo"
								/>
							</a>
							<a href="https://discordapp.com/invite/wX58JRv">
								{/* <FontAwesomeIcon  className="iconBrand" size="2x" icon={faDiscord}></FontAwesomeIcon> */}
								<img
								src={discord_logo}
								class="contact-us-logo-2"
								alt="IG Logo"
								/>
							</a>
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