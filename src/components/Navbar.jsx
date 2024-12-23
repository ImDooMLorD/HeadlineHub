import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">HeadlineHub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
              </ul>
            </div>
            <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
