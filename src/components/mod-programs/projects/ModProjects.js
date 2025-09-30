import React from "react";
import { Card, Image } from "react-bootstrap";
import "./ModProjects.css";


const ModProjects = () => {
    return (
        <>
            {}
            <style>{`
                /* Base styles */
                .modproj-text { 
                    text-align: center; 
                    max-width: 900px; 
                    margin: 0 auto 1rem; 
                    line-height: 1.4; 
                }
                .modproj-card { width:100%; }
                .modproj-figure-container { 
                    display: flex; 
                    flex-wrap: wrap; 
                    justify-content: center; 
                    gap: 14px; 
                    margin: 1rem auto 1.25rem; 
                    width: 100%; 
                    max-width: 1000px; 
                }
                .modproj-figure-container img { 
                    height: auto; 
                    border-radius: 8px; 
                    box-shadow: 0 2px 6px rgba(0,0,0,0.12); 
                    transition: transform .2s ease; 
                }
                .modproj-figure-container img:hover { 
                    transform: translateY(-4px); 
                }
                /* Desktop / larger */
                @media (min-width: 992px) { 
                    .modproj-figure-container img { 
                        width: 30%; 
                        max-width: 240px; 
                    } 
                }
                /* Tablet */
                @media (min-width: 576px) and (max-width: 991px) { 
                    .modproj-figure-container img { 
                        width: calc(50% - 14px); 
                        max-width: 300px; 
                    } 
                }
                /* Phones */
                @media (max-width: 575px) { 
                    .modproj-text { 
                        font-size: .95rem; 
                        padding: 0 .85rem; 
                        max-width: 100%; 
                    }
                    .modproj-figure-container { 
                        flex-direction: column; 
                        gap: 18px; 
                        padding: 0 .6rem; 
                    }
                    .modproj-figure-container img { 
                        width: 100%; 
                        max-width: 460px; 
                        margin: 0 auto; 
                    } 
                    .modproj-link a { 
                        display: inline-flex; 
                        align-items: center; 
                        gap: 6px; 
                        font-size: .95rem; 
                    }
                    .modproj-link img { 
                        width: 22px; 
                        height: 22px; 
                    }
                    .modproj-card .card-body { 
                        padding: 0.9rem 0.55rem 1.25rem; 
                    }
                }
            `}</style>
            <Card className="h-100 modproj-card" style={{ border: '2px solid rgba(0,153,255,0.4)', borderRadius: 8 }}>
                <Card.Title className="text-center title" style={{ paddingTop: '0.75rem' }}>Projects</Card.Title>
                <Card.Body>
                    <div className="modproj-text">
                        Join our semester-long workshop to enhance your coding skills through a hands-on project and expert guidance from our ACM leaders. Perfect for students eager to advance their practical programming abilities while adding to their resume.
                    </div>
                    <div className="modproj-figure-container">
                        {}
                        <Image src={require("./photos/game_of_life_poster.png")} alt="Game of Life Poster" rounded />
                        <Image src={require("./photos/space_invaders_poster.png")} alt="Space Invaders Poster" rounded />
                        <Image src={require("./photos/wordle_poster.png")} alt="Wordle Poster" rounded />
                    </div>
                    <div className="modproj-link text-center mt-2">
                        <a href="./projects">
                            <Image src={require("./photos/link.png")} alt="Projects Link Icon" style={{ width: 28, height: 28, marginRight: 6 }} />
                            See what we're doing this semester!
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ModProjects;