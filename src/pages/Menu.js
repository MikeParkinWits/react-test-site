import React, { Component } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Synth Menu</h1>
        <div className="menuList">
          {MenuList.map((menuItem, value) => {
            return (
              <MenuItem
                key={value}
                name={menuItem.name}
                price={menuItem.price}
                image={menuItem.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
