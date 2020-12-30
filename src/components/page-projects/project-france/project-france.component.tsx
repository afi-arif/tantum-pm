import React from "react";
import "./project-france.scss";

export default class ProjectsFR extends React.Component {
    render(){
        return (
            <div className="country-fr">
                <div className="tantum-block project-restaurant">
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
                        <p>A UK client approached our project management team for an ambitious international project. Our mission was to transform eight flats in Paris’ Île de France.</p>
                        <p>Located 20 minutes from Paris Orly International Airport, the project posed many challenges. We would need to consider both property value and flight paths. Additionally, the client was dissatisfied with his current building contractor.</p>
                        <p>We stepped in to project manage the development and liaise with all stakeholders. Drawing upon our extensive knowledge in European regulations, we met many challenging demands. These included traffic monitoring and limited space. We approached our trusted local contractors to complete the project.</p>
                        <p>Our team devised a schedule to manage contractors and deliveries. We overcame spatial constraints by following an agile construction process. Teams comprised both UK-based designers and French architects, whom we managed in unison.</p>
                        <p>The result was transformational. Using a reliable contractor team, we were able to renovate eight apartments into contemporary living spaces. We assured our client that residents would enjoy an enhanced quality of life, without intrusion from local flight paths. Likewise, we followed all regulations, streamlining processes and offering extra peace of mind.</p>
                        <p>We delivered the project within 13 months. Saving time, money and legal complications, we went above and beyond our client’s expectations.</p>
                    </div>
                </div>
                <div className="tantum-block more-info">
                    <a target="_blank" href="https://www.flickr.com/photos/147240716@N08/albums/with/72157679505805946">See more projects</a>
                </div>
            </div>
        )
    }
}