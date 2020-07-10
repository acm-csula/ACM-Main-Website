import React from 'react'
import "./Projects.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class NewProject extends React.Component {
    render() {

        let button
        const today = new Date()
        const deadline = new Date(this.props.deadlineDate + " " + this.props.deadlineTime)
        
        if (today >= deadline) {
            button = <Button variant="secondary" disabled>The deadline to sign up has passed. Sorry!</Button>
        }
        else {
            button = <Button variant="success" href={this.props.linkToSignUp}>Click here to Sign Up!</Button>
        }

        return (
            <div>
                <br></br>
                <b>{this.props.opener} </b>{this.props.description}<br></br><br></br>
                
                {button}<br></br><br></br>

                <h2>❖ <span class="highlight-text">Expected Technologies in this Project:</span></h2><br></br>
                <ul>
                    {this.props.technologies.map((value, index) => {
                        return <li>{value}</li>
                    })}
                </ul>

                <img src={require('' + this.props.poster)} class="img-fluid project-poster" alt="project poster"></img>     

                <br></br><br></br>                   

                <h2>❖ <span class="highlight-text">Project Leaders:</span></h2>
                <div class="carousel">
                <Carousel infiniteLoop>
                    {this.props.projectLeadersImages.map((value, index) => {
                        return <div>
                            <img className='carousel-leader-image' src={require('' + value)} alt="leader" />
                            <p className="legend">{this.props.projectLeaders[index]}</p>
                        </div>
                    })}
                </Carousel>
                </div>
            </div>
        )
    }
}

export default NewProject