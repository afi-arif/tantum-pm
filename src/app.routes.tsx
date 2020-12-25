import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "./components/page-home/home.component";
import {Aboutus} from "./components/page-about-us/about-us.component";

export const appRoutes = () => (
    <Router>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about-us" component={Aboutus}></Route>
    </Router>
);
