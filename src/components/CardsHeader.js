import React from "react";
import Button from "./Button";
import "../styles/CardsHeader.scss";

function CardsHeader() {
  const buttonTitles = ["Blok A", "Blok B", "Blok C"];
  return (
      
    <div className="cards-header">
      <div className="search-input">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Axtar" />
      </div>
      <div className="blok-buttons">
        {buttonTitles.map((elem) => (
          <Button title={elem} />
        ))}
      </div>
    </div>
  );
}

export default CardsHeader;
