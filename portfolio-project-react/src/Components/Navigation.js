import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
