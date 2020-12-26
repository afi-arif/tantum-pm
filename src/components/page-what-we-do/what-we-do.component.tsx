import React from "react";
import "./what-we-do.style.scss";

export default class Whatwedo extends React.Component {
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
                            <button>Out Project</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}