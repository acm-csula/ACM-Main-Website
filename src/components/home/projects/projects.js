import React, { Component } from 'react';

import './projects.scss';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return(
            <section className="Projects-tease">
                <div className="left">
                </div>
                <div className="right">
                    <div className="content">
                        <div className="subTitle"> programs </div>
                        <div className="title"> Projects </div>
                        <div className="description"> Our chapter is a project-based organization, where we experiment with industry technology trends. We have beginner and advanced projects.   </div>
                        <div className="link-btn mt-4">
                            <a className="label px-5" href="/projects">
                                learn more
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Projects