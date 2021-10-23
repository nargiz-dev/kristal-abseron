import React from "react";

function CardAccordionCredit({ building }) {
  return (
    <div className="accordion-credit-wrapper">
      <div className="card-accordion-info">
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
          <p>{building.otaqsayi}</p>
        </div>
        <div className="info">
          <h5>Otaq sayı</h5>
          <p>{building.otaqsayı}</p>
        </div>
        <div className="info">
          <h5>Otaq sayı</h5>
          <p>{building.ayliqodenis}</p>
        </div>
        <div className="info">
          <h5>Otaq sayı</h5>
          <p>{building.otaqsayı}</p>
        </div>
        <div className="info">
          <h5>Otaq sayı</h5>
          <p>{building.otaqsayı}</p>
        </div>

      </div>
    </div>
  );
}

export default CardAccordionCredit;
