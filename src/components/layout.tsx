import React from "react";
import {Header} from "./header.component";
import { Footer } from "./footer.component";


export class Layout extends React.Component {
    render(){
        return(
            <div className="tantum-wrapper">
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}