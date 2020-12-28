import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
const UK = React.lazy(() => import("./project-uk/project-uk.component"));
const FR = React.lazy(() => import("./project-france/project-france.component"));
const LT = React.lazy(() => import("./project-lithuania/project-lithuania.component"));

export default class Projects extends React.Component {
    
    render(){
        return(
          <>
            <ul>
                <li><Link to="/projects/united-kingdom">Projects UK</Link></li>
                <li><Link to="/projects/france">Projects FR</Link></li>
                <li><Link to="/projects/lithuania">Projects LT</Link></li>
            </ul>
            
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
          </>
        )
    }
}

