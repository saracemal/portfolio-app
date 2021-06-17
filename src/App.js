import React from "react";
import HomePage from "./HomePage"
import HomeNav from "./HomeNav"
import './data';


function App() {

  //fetch for projects right here 
    return (
       
            <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
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