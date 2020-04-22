import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProjects: [],
    };
  }
  async componentDidMount() {
    const url = "https://api.github.com/users/amita125/repos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ userProjects: data });
        console.log(this.state.userProjects);
      })
      .catch(console.log);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10" id="about-me-page">
          <div className="grid-container">
            {this.state.userProjects.map((project) => (
              <div key={project.id}>
                <div className="card" id="projectCard">
                  <div className="card-body">
                    <h5 className="card-title">Project : {project.name}</h5>
                    {/* <p className="card-text">{project.description}</p> */}
                    <a href={project.html_url} className="btn btn-primary">
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
}

export default Project;
