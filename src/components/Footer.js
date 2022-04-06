import React, { Component } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "../styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <p>&copy; 2021 Moog Music</p>
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <PinterestIcon />
        </div>
      </div>
    );
  }
}
