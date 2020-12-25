import React, { Suspense, FC} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import "./styles/layout.scss";
import "./styles/global.scss";
import {Layout } from "./components/layout";

const Home = React.lazy(() => import("./components/page-home/home.component"));
const Aboutus = React.lazy(() => import("./components/page-about-us/about-us.component"));


const App:FC = () => {
    return (
    
        <Router>
            <Layout>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Redirect exact from="/" to="/about-us" />
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about-us">
                        <Aboutus />
                    </Route>
                </Suspense>
            </Switch>
            </Layout>
        </Router>

    )
};

ReactDOM.render(<App />, document.getElementById("root"));