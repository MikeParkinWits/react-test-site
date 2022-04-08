import React, { Component } from "react";

import "../styles/Home.css";
import HomepageBanner from "../assets/HomepageBanner.jpg";

import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div
        className="home"
        style={{ backgroundImage: `url(${HomepageBanner})` }}
      >
        <div className="headerContainer">
          <h1>Moog Music</h1>
          <p>The Home of Synth</p>
          <Link to="/react-test-site/menu">
            {" "}
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    );
  }
}
