import React from "react";
import room from "images/room.svg";

function CardAccordionSold({ building }) {
  return (
    <div className="sold-card-accordion">
      <div className="close-icon">
        <i class="fas fa-chevron-up"></i>
      </div>
      <div className="sold-accordion">
        <div className="info">
          <h5>Mənzil sahibi</h5>
          <p>{building.mənzilSahibi}</p>
        </div>
        <div className="info">
          <h5>Sahəsi</h5>
          <p>{building.sahesi}</p>
        </div>
        <div className="info">
          <h5>Otaq sayı</h5>
          <div className="row-element room">
            <img src={room} />
            {building.otaqsayi}
          </div>
        </div>
        <div className="info">
          <h5>Ümumi qiyməti</h5>
          <p>{building.qiymeti}</p>
        </div>
        <div className="info">
          <h5>1 m qiyməti</h5>
          <p>{building.birmetrqiymeti}</p>
        </div>
        <div className="info">
          <h5>Mərtəbə</h5>
          <p>{building.mertebe}</p>
        </div>
        <div className="info">
          <h5>Tarix</h5>
          <p>{building.tarix}</p>
        </div>
      </div>
    </div>
  );
}

export default CardAccordionSold;
