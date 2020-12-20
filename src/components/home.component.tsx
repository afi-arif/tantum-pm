import React from 'react';
import Img from "./../images/flower.jpg"; 

export class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Hello World!!</h1><img src={Img} />
                <p>I am the parent of <span>children ooh!!xxx</span></p>
            </>
        )
    }
}