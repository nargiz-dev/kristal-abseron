import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { SidebarData } from "data/data";
import logo from "images/logo.svg";
import Home from "pages/Home";

import "styles/Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="sidebar-links">
        <ul>
          {SidebarData.map((item, key) => {
            return (
              <li key={key} className={item.cName}>
                <Link className="link" to={item.path}>
                  <img src={item.icon} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
