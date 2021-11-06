import React from "react";
import profilePhoto from "images/profilePhoto.svg";
import notification from "images/notification-icon.svg";

import { Turn as Hamburger } from "hamburger-react";

import "styles/Header.scss";

function Header({ header, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div
          className={
            sidebarOpen ? "hamburger-btn closed-button" : "hamburger-btn"
          }
        >
          <Hamburger
            color="#004AA1"
            toggled={sidebarOpen}
            toggle={setSidebarOpen}
          />
        </div>

        <h2>{header}</h2>
        <div className="profile">
          <img src={notification} alt="notification-icon"/>
          <img src={profilePhoto} alt="profile-photo"/>
          <div className="profile-info">
            <h5>Əhməd Əliyev</h5>
            <p>Satış meneceri</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
