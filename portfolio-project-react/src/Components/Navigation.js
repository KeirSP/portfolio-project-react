import React from "react";
import { Link } from "react-router-dom";
function Navigation(props) {
  return (
    <div>
      <nav className="navbar" id="navigation">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/project">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
