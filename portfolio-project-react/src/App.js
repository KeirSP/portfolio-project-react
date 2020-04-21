import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "./Components/Project";
import Aboutme from "./Components/Aboutme";
import Navigation from "./Components/Navigation";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/about">
              <Aboutme />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
