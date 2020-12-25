import React from 'react';
import "./about-us.style.scss";

export default class Aboutus extends React.Component {
    render() {
        return (
            <>
                <div className="tantum-block safe-hands">
                    <div className="content">
                        <h2>Your project, in safe hands.</h2>
                        <p>With 25 years of experience behind us,
we know what makes a successful
project work. </p>
                    
                    </div>
                    <div className="btn-block">
                        <button>Our Object</button>
                        <span className="pattern"></span>
                    </div>
                </div>
                <div className="tantum-block motive">
                    <ul>
                        <li><a href="#">Our purpose</a></li>
                        <li><a href="">Why choose us</a></li>
                        <li><a href="">Our promise to you</a></li>
                        <li><a href="">Our ethos</a></li>
                    </ul>
                </div>
            </>
        )
    }
}