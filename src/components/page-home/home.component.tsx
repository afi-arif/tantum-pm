import React from 'react';
import { StaticContext } from 'react-router';
import {Helmet} from "react-helmet";
import { Link, withRouter, RouteComponentProps    } from 'react-router-dom';
import "./home.style.scss";

interface InterfaceHome {
    showMore:boolean;
}

 class Home extends React.Component<RouteComponentProps, InterfaceHome> {

    state:InterfaceHome  = {showMore:false}

    goToProducts = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, path:string):void => {
        e.preventDefault();
        this.props.history.push(path);
    }

    showMore = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>):void => {
        e.preventDefault();
        this.setState(() => ({showMore: !this.state.showMore}));
    }

    constructor(props: Readonly<RouteComponentProps<{}, StaticContext, unknown>>){
        super(props);
        document.body.classList.add("light-wire");
    }

    componentWillUnmount(){
        document.body.classList.remove("light-wire");
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Your End-to-end project management</title>
                    <meta name="description" content="Your End-to-end project management" />
                </Helmet>
                <div className="home-page">
                    <div className="tantum-block winter-house">
                        <div className="content">
                            <h2>Your End-to-end project management.</h2>
                            <p>Where the first stage
                            is just as important
                        as the last.</p>
                        </div>
                        <div className="tantum-winter-house">
                            <button onClick={(e) => this.goToProducts(e, '/projects')}>Our Projects</button>
                        </div>
                    </div>
                    <div className="tantum-block welcome">
                        <div className="content">
                            <h2>Welcome</h2>
                            <p>We are Tantum – a residential project management company that serves a diverse clientele across the UK and beyond.</p>
                            <button onClick={(e) => this.goToProducts(e, '/about-us')}>About Us</button>
                        </div>

                        <div className="pattern"></div>
                    </div>
                    <div className="tantum-block what-we-do">
                        <div>
                            <h2>What we do</h2>
                            <p>Tantum provides project management services for private , individual clients.We have designed it for those who wish to carry out redevelopments on their own property, or to complete a new build from scratch.</p>
                        </div>
                        <div>
                            <Link to="/projects/united-kingdom#project2">Conversions</Link>
                            <Link to="/projects/united-kingdom#project1">Extensions</Link>
                            <Link to="/projects/lithuania#project1">New builds</Link>
                            <Link to="/projects/france#project1">Refurbishments</Link>
                        </div>
                    </div>
                    <div className="tantum-block tantum-way">
                        <div className={`content + ${this.state.showMore ? 'active' : ''}`}>
                            <h2>The Tantum way</h2>
                            <div className="show-case"></div>
                            <p><span>From planning to estimation to delivery, we do things differently. It's why our clients trust us. Every time.</span></p>
                            <p>
                                <strong>Dedicated project manager</strong>
                                When you work with us, you’ll get your own dedicated project manager.
                            </p>
                            <div className="show-all">
                                <p>As your point of contact for everything, they’ll take care of the entire process from start to finish. It’s like having your own personal assistant, quality auditor and budget controller all rolled into one. So you can rest assured that your project is in safe hands. Just how it should be.</p>
                                <p>
                                    <strong>​Competitive tendering</strong>
                                    By putting your project out to tender, we’ll curate the most competitive quotes the market has to offer.All quotes come in a standardised format, so comparing them is a breeze.Using our expertise, we’ll narrow down the quotes based on cost, inclusivity, and accuracy.Then, we’ll present the best options to help you make the right decision.Easy.
                                </p>
                                <p>
                                    <strong>Budget control</strong>
                                    We'll negotiate a schedule with contractors on your behalf, agreeing a timeline and payment plan that works for you. You'll never pay for everything upfront – only in stages as each phase of the work is completed.You also hold back 5% of the project’s entire cost to cover any snagging works.No going over budget.No unexpected surprises.
                                </p>
                                <p>
                                    <strong>Peace of mind</strong>
                                    From legal paperwork to contractor liaison, our team will handle everything for you.At the end of your project, we’ll hand you a booklet that has everything you need in one place.All work is insured – and with a warranty for appliances and a ten-year guarantee on new builds, the quality speaks for itself.You’ll be glad you chose us.
                                </p>
                            </div>
                        </div>
                        <span><a className={this.state.showMore ? 'active' : ''} onClick={this.showMore}>{this.state.showMore ? 'read less' : 'read more'}</a></span>
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
                                                 “The project manager went over and beyond to ensure the project was completed to high standards.The quality of the service and customer relationship was second to none.Thank You!" 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>
        )
    }
}

export default withRouter(Home);