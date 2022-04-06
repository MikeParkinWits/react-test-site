import React, { Component } from "react";
import "../styles/About.css";

import AboutImage from "../assets/h.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `URL(${AboutImage})` }}
        ></div>
        <div className="aboutBottom">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            sapiente nostrum debitis excepturi asperiores. Repellat, eveniet
            itaque explicabo consectetur tenetur corporis autem deleniti quidem
            sed, quisquam eos odio animi, fugiat recusandae molestiae. Dolores,
            eligendi omnis. Earum, molestiae voluptas nobis pariatur, unde
            soluta facilis recusandae esse, nulla veniam consequatur harum
            aperiam.
          </p>
        </div>
      </div>
    );
  }
}
