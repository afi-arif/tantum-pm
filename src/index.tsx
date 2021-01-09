import React, { Suspense, FC} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/layout.scss";
import "./styles/global.scss";
import {Layout } from "./components/layout";

const Home = React.lazy(() => import("./components/page-home/home.component" /* webpackChunkName: "chunk-home" */));
const Aboutus = React.lazy(() => import("./components/page-about-us/about-us.component" /* webpackChunkName: "chunk-about-us",  webpackPrefetch: true */));
const WhatWeDo = React.lazy(() => import("./components/page-what-we-do/what-we-do.component" /* webpackChunkName: "chunk-what-we-do",  webpackPrefetch: true  */));
const Projects = React.lazy((() => import("./components/page-projects/projects.component" /* webpackChunkName: "projects",  webpackPrefetch: true */)));
const ContactUs = React.lazy(() => import("./components/page-contact-us/contact-us.component" /* webpackChunkName: "contact-us",  webpackPrefetch: true */));
import Preloader from "./components/page-preload/preload.component";

const App:FC = () => {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<Preloader />}>
                <Switch>
                    <Route exact path="/">
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
                    <Route component={Home} />
                </Switch>
            </Suspense>
            </Layout>
        </Router>

    )
};

ReactDOM.render(<App />, document.getElementById("root"));