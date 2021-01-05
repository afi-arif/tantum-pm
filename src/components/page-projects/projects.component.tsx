import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./projects.style.scss";
const UK = React.lazy(() => import("./project-uk/project-uk.component" /* webpackChunkName: "project-uk" */));
const FR = React.lazy(() => import("./project-france/project-france.component" /* webpackChunkName: "project-france" */));
const LT = React.lazy(() => import("./project-lithuania/project-lithuania.component" /* webpackChunkName: "project-lithuania" */));

function hashScroll() {
    const { hash, origin, pathname } = window.location;
    if (hash !== "") {
        window.location.replace(origin + pathname);
        setTimeout(() => {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }, 0);
    }
}

export default class Projects extends React.Component {

    projects: boolean = false;

    constructor(props:{}){
        super(props);
        this.projects = true;
    }
    
    render(){

        return(
          <>
            <header className="page-header">
                <nav className="page-navi">
                    <ul>
                        <li><NavLink to="/projects/united-kingdom">United kingdom</NavLink></li>
                        <li><NavLink to="/projects/france">France</NavLink></li>
                        <li><NavLink to="/projects/lithuania">Lithuania</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Switch>
                    <Redirect exact from="/projects" to="/projects/united-kingdom" />
                    <Route path="/projects/united-kingdom">
                        <UK onEnter={hashScroll} />
                    </Route>
                    <Route path="/projects/france">
                        <FR onEnter={hashScroll} />
                    </Route>
                    <Route path="/projects/lithuania">
                        <LT onEnter={hashScroll} />
                    </Route>
                </Switch>
            </main>
            
          </>
        )
    }
}

