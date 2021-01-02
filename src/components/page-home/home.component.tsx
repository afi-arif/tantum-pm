import React from 'react';
import { Link } from 'react-router-dom';
import "./home.style.scss";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
               <div className="tantum-block winter-house">
                   <div className="content">
                       <h2>Your End-to-end project management.</h2>
                       <p>Where the first stage
is just as important
as the last.</p>
                   </div>
                   <div className="tantum-winter-house"></div>
               </div>
               <div className="tantum-block welcome">
                    <div className="content">
                        <h2>Welcome</h2>
                        <p>We are Tantum – a residential project management company that serves a diverse clientele across the UK and beyond.</p>
                    </div>
                    <div className="pattern"></div>
                </div>
               <div className="tantum-block what-we-do">
                       <div>
                           <h2>What we do</h2>
                           <p>Tantum provides project management services for private, individual clients. We have designed it for those who wish to carry out redevelopments on their own property, or to complete a new build from scratch.  </p>
                       </div>
                       <div>
                           <Link to="projects">Conversions</Link>
                           <a href="#">Extensions</a>
                           <a href="#">New builds</a>
                           <a href="#">Refurbishments</a>
                       </div>
               </div>
               <div className="tantum-block tantum-way">
                   <div className="content">
                       <h2>The Tantum way</h2>
                       <div className="show-case"></div>
                       <p>From planning to estimation to delivery, we do things differently. It’s why our clients trust us. Every time.</p>
                       <p>
                           <strong>Dedicated project manager</strong>
                           When you work with us, you’ll get your own dedicated project manager. As your point of contact for everything, they’ll take care of the entire process from start to finish. It’s like having your own personal assistant, quality auditor and budget controller all rolled into one. So you can rest assured that your project is in safe hands. Just how it should be.
                        </p>
                        <p>
                        <strong>​Competitive tendering</strong>
By putting your project out to tender, we’ll curate the most competitive quotes the market has to offer. All quotes come in a standardised format, so comparing them is a breeze. Using our expertise, we’ll narrow down the quotes based on cost, 
                        </p>
                       <span><a href="">read more</a></span>
                   </div>
               </div>
               <div className="tantum-block tantum-clients">
                    <h2>What our clients say</h2>
                   <div className="content">
                        <div className="feedback">
                            <div className="imag-icon icon1"></div>
                            <div className="client-details">
                                <h5>WILLIAM STONE</h5>
                                <span>Orpington UK</span>
                                <div className="comment">
                            “The project manager went over and beyond to ensure the project was completed to high standards. The quality of the service and customer relationship was second to none. Thank You!"</div>
                            </div>
                            
                        </div>
                        <div className="feedback">
                            <div className="imag-icon icon2"></div>
                            <div className="client-details">
                                <h5>DIMITRI OBLIKOV</h5>
                                <span>London</span>
                                <div className="comment">
                            "The Tantum team managed every step which allowed me to get on with my life! Very easy, stress free process. Very friendly. Will definitely use Tantum again!"  
                            </div>
                            </div>
                            
                        </div>
                        <div className="feedback">
                            <div className="imag-icon icon3"></div>
                            <div className="client-details">
                                <h5>HANNAH BENTLEY</h5>
                                <span>Weybridge</span>
                                <div className="comment">
                            “The project manager went over and beyond to ensure the project was completed to high standards. The quality of the service and customer relationship was second to none. Thank You!" 
                            </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}