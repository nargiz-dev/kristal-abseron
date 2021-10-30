import React from "react";
import group from 'images/group.svg';
import "styles/RowAccordion.scss";

function RowAccordion({ building, key, show, showAccordion , setShowAccordion}) {
  return (
    <div className={show ? "active accordion" : "close"}>
        <div className="close-icon"><i class="fas fa-chevron-up"></i></div>
      <div className="accordion-first-line">
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
          <h5>Aylıq ödəniş</h5>
          <p>{building.ayliqodenis}</p>
        </div>
        <div className="info">
          <h5>İlkin ödəniş</h5>
          <p>{building.ilkinodenis}</p>
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
      <div className="accordion-second-line">
        <div className="info">
          <h5>Zamin</h5>
          <p>{building.zamin}</p>
        </div>
        <div className="info">
          <h5>1 m qiyməti</h5>
          <p>{building.birmetrqiymeti}</p>
        </div>
        <div className="info">
          <h5>Dəyəri</h5>
          <p>{building.qiymeti}</p>
        </div>
        <div className="info">
          <h5>Faiz dərəcəsi</h5>
          <p>{building.faizderecesi}</p>
        </div>
        <div className="info">
          <h5>Müddəti</h5>
          <p>{building.muddeti}</p>
        </div>
        <div className="info">
          <h5>Qalıq borc</h5>
          <p>{building.qaliqborc}</p>
        </div>
      </div>
      <div className="accordion-end">
          <div className="last-section"><img src={group}/> <a>Daha çox</a></div>
          <div className="last-section-btn"><button>bildiriş göndər</button></div>
      </div>
    </div>
  );
}

export default RowAccordion;
