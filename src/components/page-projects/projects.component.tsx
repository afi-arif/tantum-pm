import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./projects.style.scss";
const UK = React.lazy(() => import("./project-uk/project-uk.component"));
const FR = React.lazy(() => import("./project-france/project-france.component"));
const LT = React.lazy(() => import("./project-lithuania/project-lithuania.component"));

export default class Projects extends React.Component {
    
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
                        <UK />
                    </Route>
                    <Route path="/projects/france">
                        <FR />
                    </Route>
                    <Route path="/projects/lithuania">
                        <LT />
                    </Route>
                </Switch>
            </main>
            
          </>
        )
    }
}

