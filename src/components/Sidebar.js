import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { SidebarData } from "data/data";
import logo from "images/logo.svg";
import Home from "pages/Home";

import "styles/Sidebar.scss";

function Sidebar({ headerTitle, setHeaderTitle, sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className={sidebarOpen ? "sidebar-wrapper " : "sidebar-wrapper close"}>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="sidebar-links">
        <ul>
          {SidebarData.map((item, key) => {
            return (
              <li
                className={
                  splitLocation[2] === item.path
                    ? "active-link link-wrapper"
                    : item.cName
                }
                onClick={() => setHeaderTitle(item.path)}
                key={key}
              >
                <Link className="link" to={"/home/" + item.path}>
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
