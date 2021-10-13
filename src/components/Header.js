import React from "react";
import "../styles/Header.scss";
import profilePhoto from "../images/profilePhoto.svg";
import notification from "../images/notification-icon.svg";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <h2>Statistika</h2>
        <div className="profile">
          <img src={notification} />
          <img src={profilePhoto}/>
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
