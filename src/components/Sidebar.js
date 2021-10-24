import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { SidebarData } from "data/data";
import logo from "images/logo.svg";
import Home from "pages/Home";

import "styles/Sidebar.scss";

function Sidebar() {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="sidebar-wrapper">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="sidebar-links">
        <ul>
          {SidebarData.map((item, key) => {
            return (
              <li className={splitLocation[1] === item.path ? "active-link link-wrapper" : item.cName } key={key} >
                <Link className="link" to={"/"+item.path}>
                  <div className="link-icon">{item.icon}</div>
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
