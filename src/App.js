import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage"
import ProjectPage from "./ProjectPage";
import ResumePage from "./ResumePage";
import './data';

function App() {
    return (
            <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/projects">
                  <ProjectPage />
                </Route>
                <Route exact path="/resume">
                  <ResumePage />
                </Route>
            </Switch>
        
    )
}

export default App;