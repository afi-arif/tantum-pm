import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "./components/page-home/home.component";
import {Service} from "./components/service.component";

export const appRoutes = () => (
    <Router>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/service" component={Service}></Route>
    </Router>
);
