import React from "react";
import HomePage from "./HomePage"
import HomeNav from "./HomeNav"
import './data';
import UseSticky from "./UseSticky.js"

function App() {
  const { isSticky, element } = UseSticky()
  //fetch for projects right here 
    return (
        <div>
          <HomeNav sticky={isSticky} />
          <HomePage element={element} />
        </div>
            // <Switch>
            //     <Route exact path="/">
            //       <HomePage />
            //     </Route>
            //     <Route exact path="/">
            //       <HomePage />
            //     </Route>
            //     <Route exact path="/projects">
            //       <ProjectPage />
            //     </Route>
            //     <Route exact path="/resume">
            //       <ResumePage />
            //     </Route>
            // </Switch>
        
    )
}

export default App;