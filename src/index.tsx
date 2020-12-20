import React, {FC} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import "./styles/layout.scss";
import "./styles/global.scss";
import {Home} from "./components/page-home/home.component";
import {Service} from "./components/service.component";
import {Layout } from "./components/layout";

const routes = [
       {
        path:"/Home",
        component:Home
    },
    {
        path:"/service",
        component:Service
    }
];


const App:FC = () => {
    return (
        
    
        <Router>
            <Layout>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <Home />
                </Route>
                <Route exact path="/service">
                    <Service />
                </Route>
            </Switch>
            </Layout>
        </Router>

    )
};

ReactDOM.render(<App />, document.getElementById("root"));