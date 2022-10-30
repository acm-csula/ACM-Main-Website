import React, { Component} from 'react';
import firebase from '../../professional/firebaseConfig.js';
import { Card, Button, Row } from 'react-bootstrap';

import './impAnnouncements.scss';

class ImpAnnouncements extends Component {
    state ={
        upcomingEvent: null,
    }

    componentDidMount(){
        firebase.firestore().collection("upcomingEvents").get()
        .then(snapshot => {
            const events = []
            snapshot.forEach(doc => {
                const data = doc.data()
                events.push(data)
            })
            this.setState({upcomingEvent : events})
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <section className="impAnnouncements-tease">
                <div className="content">
                    <div className="title">Academic Year 2022-2023</div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GAC_c9xLg5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="description">
                        <p>Communications will be done via email, Discord, and social media</p>
                    </div>
                    <br></br>
                    <Row className="justify-content-center title">upcoming Events</Row>
                    <Row className="justify-content-center event-grid">
                        {
                            this.state.upcomingEvent &&
                            this.state.upcomingEvent.map( upcomingEvents => {
                                return (
                                    <Card style={{width: '24rem', padding: '10px'}}>
                                        <center>
                                            <img style={{height: '30rem', padding: '10px'}} src={upcomingEvents.imgUrl} alt="Upcoming event"/>
                                            <p>Sign up starts: {upcomingEvents.signUpStart}</p>
                                            <p>Sign up Deadline: {upcomingEvents.deadline}</p>
                                            <Button href={upcomingEvents.link} style={{backgroundColor: '#0A84FF'}}>RSVP</Button>
                                        </center>
                                    </Card>
                                )
                            })
                        }
                    </Row>
                </div>
            </section>
        )
    }
}

export default ImpAnnouncements;