import React from 'react';
import "./home.style.scss";

export class Home extends React.Component {
    render() {
        return (
            <>
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
                           <a href="#">Conversions</a>
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
                       <span><a href="">read more</a></span>
                   </div>
               </div>
               <div className="tantum-block tantum-clients">xx</div>
            </>
        )
    }
}