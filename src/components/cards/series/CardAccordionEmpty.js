import React from 'react';
import room from "images/room.svg";

function CardAccordionEmpty({building}) {
    return (
        <div className="empty-cards-accordion">
              <div className="close-icon"><i class="fas fa-chevron-up"></i></div>
              <div className="empty-accordion">
              <div className="info">
              <h5>Sahəsi</h5>
          <p>{building.sahesi}</p>
        </div>
      
        <div className="info">
          <h5>Otaq sayı</h5>
          <div className="row-element room">
                  <img src={room} alt="room-number"/>
                  {building.otaqsayi}
                </div>
        </div>
        <div className="info">
          <h5>Dəyəri</h5>
          <p>{building.qiymeti}</p>
        </div>
        <div className="info">
          <h5>1 m  qiyməti</h5>
          <p>{building.birmetrqiymeti}</p>
        </div>
        <div className="info">
          <h5>Mərtəbə</h5>
          <p>{building.mertebe}</p>
        </div>
        <div className="info">
          <h5>Daxili kredit</h5>
          <p>{building.daxilikredit}</p>
        </div>
        <div className="info">
          <h5>Faiz dərəcəsi</h5>
          <p>{building.faizderecesi}</p>
        </div>
        
        <div className="info">
          <h5>Müddəti</h5>
          <p>{building.kreditmuddeti}</p>
        </div>
        <div className="info">
          <h5>Ilkin ödəniş</h5>
          <p>{building.kreditİlkin}</p>
        </div>
        <div className="info">
          <h5>Aylıq ödəniş</h5>
          <p>{building.kreditayliq}</p>
        </div>
        <div className="info">
          <h5>İpoteka</h5>
          <p>{building.ipoteka}</p>
        </div>
        <div className="info">
          <h5>Faiz dərəcəsi</h5>
          <p>{building.faizderecesi}</p>
        </div>
        <div className="info">
          <h5>Müddəti</h5>
          <p>{building.ipotekamuddeti}</p>
        </div>
        <div className="info">
          <h5>Ilkin ödəniş</h5>
          <p>{building.ipotekaİlkin}</p>
        </div>
        <div className="info">
          <h5>Aylıq ödəniş</h5>
          <p>{building.ipotekaAyliq}</p>
        </div>

            
            </div>
        </div>
    )
}

export default CardAccordionEmpty
