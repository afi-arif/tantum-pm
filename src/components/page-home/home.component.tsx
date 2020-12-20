import React from 'react';
import "./home.style.scss";

export class Home extends React.Component {
    render() {
        return (
            <>
               <div className="tantum-block winter-house">
                   <div className="content"></div>
                   <div className="tantum-winter-house"></div>
               </div>
               <div className="tantum-block welcome"></div>
               <div className="tantum-block what-we-do"></div>
               <div className="tantum-block tantum-way"></div>
               <div className="tantum-block tantum-clients">xx</div>
            </>
        )
    }
}