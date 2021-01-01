import React, { Suspense, FC} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import "./styles/layout.scss";
import "./styles/global.scss";
import {Layout } from "./components/layout";

const Home = React.lazy(() => import("./components/page-home/home.component" /* webpackChunkName: "chunk-home" */));
const Aboutus = React.lazy(() => import("./components/page-about-us/about-us.component" /* webpackChunkName: "chunk-about-us" */));
const WhatWeDo = React.lazy(() => import("./components/page-what-we-do/what-we-do.component" /* webpackChunkName: "chunk-what-we-do" */));
const Projects = React.lazy((() => import("./components/page-projects/projects.component" /* webpackChunkName: "projects" */)));
const ContactUs = React.lazy(() => import("./components/page-contact-us/contact-us.component" /* webpackChunkName: "contact-us" */));


const App:FC = () => {
    return (
    
        <Router>
            <Layout>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about-us">
                        <Aboutus show={-1} />
                    </Route>
                    <Route path="/what-we-do">
                        <WhatWeDo />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>
                </Suspense>
            </Switch>
            </Layout>
        </Router>

    )
};

ReactDOM.render(<App />, document.getElementById("root"));