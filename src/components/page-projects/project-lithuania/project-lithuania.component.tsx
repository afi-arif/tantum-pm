import React from "react";
import "./project-lithuania.scss";
import {Helmet} from "react-helmet";

interface LTProps {
    onEnter:() => void;
}

export default class ProjectsLT extends React.Component<LTProps, {}> {

    componentDidMount = () => {
        if(this.props.onEnter){
            this.props.onEnter();
        }
    }

    render(){
        return (
            <>
            <Helmet>
                <title>Your project, in safe hands. Modern transformation of a Paris apartment block</title>
                <meta name="description" content="Modern transformation of a Paris apartment block" />
            </Helmet>
            <div className="country-lt">
                <div className="tantum-block project-restaurant" id="project1">
                    <div className="address-project">
                        <div className="project-title">
                            <h5>Modern transformation of a Paris apartment block</h5>
                        </div>
                        <div className="project-detail">
                            <div>
                            <div>
                                <div>Type:</div>
                                <div>New Build Flats</div>
                            </div>
                            <div>
                                <div>Duration:</div>
                                <div>13 Months</div>
                            </div>
                            <div>
                                <div>Cost:</div>
                                <div>950,000 Euro’s</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-description">
                        <span className="seen-restaurant"></span>
                        <p>The capital city of Lithuania, Vilnius welcomes more than a million visitors each year.. We were tasked with managing a holiday resort construction project to welcome new guests.</p>
                        <p>The client had a strong vision and was open to new ideas. The original blueprints featured three and four-bedroom flats, three holiday villas, a 200 sqm functional hall, a restaurant, and a sauna. We suggested adding a touch of class with a manmade lake. This would give guests the chance to explore local forest activities. As a luxury feature, it also offered an additional value proposition for the client.</p>
                        <p>With this new installation, and the broad range of property types, we would have to adhere to numerous local building regulations. We consulted with our European contacts and also brought in our own highly commended UK-based designer. Our contractor was able to capture the distinct</p>
                        <p>Following the site’s successful construction, we made multiple visits back there to check in. Customer service is paramount for our teams. Thanks to our happy international clients, we’re pleased to say we’ve since collaborated on numerous projects in Lithuania.</p>
                    </div>
                </div>
                <div className="tantum-block more-info">
                    <a target="_blank" href="https://www.flickr.com/photos/147240716@N08/albums/with/72157679505805946">See more projects</a>
                </div>
            </div>
            </>
        )
    }
}