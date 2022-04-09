import React, { Component } from "react";
import Logo from "../assets/Logos.png";

import { Link } from "react-router-dom";

import "../styles/Navbar.css";

import ReorderIcon from "@mui/icons-material/Reorder";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLinks: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({
      openLinks: !prevState.openLinks,
    }));
  }

  render() {
    return (
      <div className="navbar">
        <div className="leftSide" id={this.state.openLinks ? "open" : "close"}>
          <img src={Logo} />
          <div className="hiddenLinks">
            <Link to="/react-test-site">Home</Link>
            <Link to="/react-test-site/men">Menu</Link>
            <Link to="/react-test-site/abou">About</Link>
            <Link to="/react-test-site/contac">Contact</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/react-test-site">Home</Link>
          <Link to="/react-test-site/men">Menu</Link>
          <Link to="/react-test-site/abou">About</Link>
          <Link to="/react-test-site/contac">Contact</Link>
          <button onClick={this.toggleNav}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
  }
}
