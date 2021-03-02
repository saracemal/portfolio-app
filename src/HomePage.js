import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import './data.js';

function HomePage() {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/">
                </Route>
                <Route exact path="/projects">
                </Route>
                <Route exact path="/resume">
                </Route>
            </Switch>
        </Wrapper>
    )
}

