import React, { Component } from "react";

export default class MenuItem extends Component {
  render() {
    return (
      <div className="menuItem">
        <div>
          <div
            className="menuImage"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
          <h1>{this.props.name}</h1>
          <p>{this.props.price}</p>
        </div>
      </div>
    );
  }
}
