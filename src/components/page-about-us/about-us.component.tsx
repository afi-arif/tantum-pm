import React from 'react';
import "./about-us.style.scss";

interface ShowInfo {
    show:number;
}

export default class Aboutus extends React.Component<ShowInfo> {

    state:ShowInfo = {show:-1}

    shuffleInfo = (e:React.MouseEvent,index:number):void => {
        e.preventDefault();
        this.setState((pre:ShowInfo) => ({show:index !== pre.show ? index: -1}));
    }

    render() {
        const visions = [
            {
                title:"Our purpose",
                info:" Tantum Property was established in 2015, our founder Siraj Deane had one simple mission – to meet the demand for experienced residential project managers at home and abroad."
            },
            {
                title:"Why choose us",
                info:" It's simple. We provide all the experience, expertise, and skills you’d expect from a property developer – at rates you wouldn't."
            },
            {
                title:"Our promise to you",
                info:" Finding out exactly what you want – and making it happen in the most pragmatic and cost-effective way."
            },
            {
                title:"Our ethos",
                info:" We pride ourselves on being flexible. But there’s one thing we won’t compromise on – and that’s our commitment to quality. Because if it’s not right for you, then it’s not right for us."
            }
        ];
        const visionList =  visions.map((vision, index) => (
            <li className={this.state.show == index ? "show" : ""} key={index}>
                <h3>{vision.title}</h3>
                <div>{vision.info}</div>
                <a className="hidden" onClick={(e) => this.shuffleInfo(e,index)} >shuffle</a>
            </li>
        ))
        return (
            <>
                <div className="tantum-block safe-hands">
                    <div className="content">
                        <h2>Your project, in safe hands.</h2>
                        <p>With 25 years of experience behind us,
                        we know what makes a successful project work. </p>
                    
                    </div>
                    <div className="btn-block">
                        <button>Our Object</button>
                        <span className="pattern"></span>
                    </div>
                </div>
                <div className="tantum-block motive">
                    <ul>
                        {visionList}
                    </ul>
                </div>
                <div className="tantum-block meet-the-team">
                    <h2>Meet the team</h2>
                    <div className="photo-gallery">
                        <div className="tantum-md">
                            <div className="profile-info">
                                <h5>Siraj Deane</h5>
                                <span>Managing Director</span>
                            </div>
                        </div>
                        <div className="tantum-crm">
                            <div className="profile-info">
                                <h5>Tom Baxter</h5>
                                <span>Client Relationship Manager</span>
                            </div>
                        </div>
                        <div className="tantum-pm">
                            <div className="profile-info">
                                <h5>Oleg Tsarev</h5>
                                <span>Project Manager</span>
                            </div>
                        </div>
                        <div className="tantum-fc">
                            <div className="profile-info">
                                <h5>Nasser Chaudary</h5>
                                <span>Financial Controller</span>
                            </div>
                        </div>
                        <div className="tantum-mm">
                            <div className="profile-info">
                                <h5>Eugenia Kovaliova</h5>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                        <div className="tantum-oa">
                            <div className="profile-info">
                                <h5>Jennifer Beecroft</h5>
                                <span>Office Administrator</span>
                            </div>
                        </div>
                        <div className="tantum-pd">
                            <div className="profile-info">
                                <h5>Yazid Yasin</h5>
                                <span>Product Development & Compliance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}