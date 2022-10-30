import React, {Component} from "react";

import Carousel from '../headercarousel/HeaderCarousel';
import ImpAnnouncement from './impAnnouncements/impAnnouncements';
import Slideshow from './slideshow/slideshow';
import AboutUs from './aboutus/aboutus';
import Activities from './activities/activities';
// import Project from './projects/projects';
// import Mentorship from './mentorship/mentorship';
// import News from './news/news';
import Membership from './membership/membership';

class Home extends Component {
    render() {
        return(
            <section className="homeWrapper">
                <Carousel/>
                <ImpAnnouncement/>
                <AboutUs/>
                <Membership/>
                <Activities/>
                <Slideshow/>
            </section>
        )
    }
}

export default Home;