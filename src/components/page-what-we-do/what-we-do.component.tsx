import React, { ComponentProps, RefObject } from "react";
import { Link, withRouter, RouteComponentProps    } from 'react-router-dom';
import "./what-we-do.style.scss";

interface InfoView {
    [key: string]: boolean
}

class Whatwedo extends React.Component<RouteComponentProps, InfoView> {

    state:InfoView;

    constructor(props: Readonly<RouteComponentProps<{}, InfoView, unknown>> ){
        super(props)
        this.state = {
            view1:false,
            view2:false,
            view3:false,
            showList:false
        } 
    
    }

    goToProducts = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, path:string):void => {
        e.preventDefault();
        this.props.history.push(path);
    }

    showCheckList = (e:React.MouseEvent):void => {
        e.preventDefault();
        this.setState((prev:InfoView) => ({showList:!prev.showList}));
    }
   
    toggleView = (e:React.MouseEvent, name: string):void => {
        e.preventDefault();
        this.setState((prev:InfoView) => ({[name]:!this.state[name], showList:false}));
    }
    render(){
        return(
            <div className="main-what-we-do">
                <div className="tantum-block end-to-end">
                    <div className="content">
                        <div className="content-info">
                            <h2>Your End-to-end project management.</h2>
                            <p>Where the first stage is just as
                            important as the last.</p>
                        </div>
                        <div className="content-btn">
                            <button onClick={(e) => this.goToProducts(e, '/projects')}>Out Project</button>
                        </div>
                    </div>
                </div>
                <div className="tantum-block our-purpose">
                    <h2>Our purpose</h2>
                    <p>Taking on any project, be it small or large, can be a stressful experience. We’re here to take away that stress. Here’s how.</p>
                    <p>You will enter a development management contract with Tantum Property, which will clearly highlight the work that is being carried out, and allow Tantum to manage your project from start to finish. Tantum will then enter into contracts with each individual contractor, and pay for work in arrears. This ensures no large upfront payments are made, as you will have an easy to use staggered one-channel payment system through Tantum. For peace of mind, all warranty and insurance, including all certifications, will be handed over to you at the end of the project.</p>
                </div>
                <div className="tantum-block tantum-steps">
                    <div className="features">
                        <div className="feature">
                            <h5>BEFORE</h5>
                            <div className={`info ${this.state.view1 ? 'active' : ''}`}>
                                <p>Once our contract is in place, we’ll assign you a dedicated project manager. From then onwards, they’ll be your main point of contact throughout the project – overseeing the entire process from start to finish.  We will then use a combination of our existing network and talented local specialists to get you multiple quotes from established local tradesmen, and allow you to choose which contractor to use. We will not force you to use a specific contractor. Furthermore, we will also check their previous work, so we can verify that it is up to our very high standard, and ensure you are not being exploited on the quote - these can vary in price rather dramatically!
                                </p>
                                <p>
                                Once this is completed, we will be able to give you a very accurate payment schedule based on schedules of work and material deliveries.
                                </p>
                            </div>
                            <a href="#" className={this.state.view1 ? 'active' : ''} onClick={(e) => this.toggleView(e, 'view1')}>read more</a>
                        </div>
                        <div className="feature">
                            <h5>During</h5>
                            <div className={`info ${this.state.view2 ? 'active' : ''}`}>
                                <p>While the project is underway, your project manager will give you periodic updates. This can be done remotely, or face-to-face – whichever you prefer. You’ll also be able to track the progress of your project through our online portal – meaning you can get updates wherever you are. We will guarantee that the work is going ahead as per the plans, be compliant with all local building regulations, and keep the building inspector informed of all completed stages. With us overseeing the work, and the stringent contracts that we will have in place, we will ensure the builders adhere to the budget, which means you will not have budgets spiralling out of control!</p>
                            </div>
                            <a href="#" className={this.state.view2 ? 'active' : ''} onClick={(e) => this.toggleView(e, 'view2')}>read more</a>
                        </div>
                        <div className="feature checkList">
                            <h5>After</h5>
                            <div className={`info  ${this.state.view3 ? 'active' : ''}`}>
                                <p>We will sign off the project, and then to keep control of the main contractors, we will allow you to withhold the final 5% payment for three months for any snagging works.You will be provided with a completion file, which will contain the following documentation where applicable:</p>
                                <button className={this.state.showList ? 'show-less': ''} onClick={this.showCheckList}>CheckList</button>
                                <div className={`check-list ${this.state.showList ? 'show-list': ''}`}>
                                    <ul>
                                        <li><h6>Pre-Construction</h6></li>
                                        <li>Structural Engineering</li>
                                        <li>Architecture services</li>
                                        <li>Party Wall Survey</li>
                                        <li>Quantity surveyor</li>
                                        <li>Multiple Quotations</li>
                                        <li>Building Notice</li>
                                    </ul>
                                    <ul>
                                        <li><h6>During Construction</h6></li>
                                        <li>Building & Workforce Management</li>
                                        <li>Regular Updates by Direct Email or Client Portal</li>
                                        <li>Dedicated Project Manager</li>
                                    </ul>
                                    <ul>
                                        <li><h6>Post Construction</h6></li>
                                        <li>Construction drawings</li>
                                        <li>Structural calculation</li>
                                        <li>Party wall award notice</li>
                                        <li>Environmental report Traffic & noise management report</li>
                                        <li>Electrical certification</li>
                                        <li>Gas safety certification</li>
                                        <li>Fire safety certification</li>
                                        <li>Sewer registration</li>
                                        <li>Water efficiency calculation</li>
                                        <li>SAP calculation & EPC Airtight testing</li>
                                        <li>Acoustic testing</li>
                                        <li>Insurance & warranty</li>
                                        <li>10-year new build warranty</li>
                                        <li>Warranty for all appliances</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className={this.state.view3 ? 'active' : ''} onClick={(e) => this.toggleView(e, 'view3')}>
                                {this.state.view3 ? "show less" : "read more"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
              
        )
    }
}

export default withRouter(Whatwedo);