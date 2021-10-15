import React from "react";
import { banksCard } from "../data/data";

function BanksCard() {
  return (
    <div className="statistics-card">
      <h4>İpoteka krediti olan banklar</h4>
      <div className="listed-items">
        <ul>
          {banksCard.map((item, index) => {
            return (
              <li className="listed-item" key={index}>
                <div className="listed-item-info">
                <img src={item.icon} />
                <div className="item-text">
                  <p>{item.text}</p>
                </div></div>
                <p className="item-value">{item.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BanksCard;
