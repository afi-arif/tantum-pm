import React from "react";
import {Header} from "./header.component";
import { Footer } from "./footer.component";
import { TantumSplash } from "./splash-video/splash-component";


export class Layout extends React.Component {
    isHomepage = window.location.pathname;
    render(){
        return(
            <div className="tantum-wrapper">
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
                <TantumSplash isHome={this.isHomepage} />
            </div>
        )
    }
}