import React, { useState, useEffect, useRef } from "react";
import Header from "components/Header";
import SelectRezidens from "components/SelectRezidens";
import circle from "images/circle.svg";
import line from "images/line.svg";
import CardsHeader from "components/CardsHeader";
import { cardData } from "redux/actions/actionCreators";

import AboutProject from "components/AboutProject";
import AddBuilding from "components/AddBuilding";
import BuildingsCards from "components/BuildingsCards";
import "styles/Buildings.scss";
function Buildings() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header header={"Binalar"} />
      <div className="section">
        <div className="buildings-wrapper">
          <div className="buildings-header-container">
            <div className="buildings-header">
              <SelectRezidens />
              <button onClick={() => setOpen(!open)}>Layihə haqqında</button>
              <AboutProject open={open} setOpen={setOpen} />
              <div className="time">
                <div className="date">
                  <img src={circle} />
                  <p>17.09.2019</p>
                </div>
                <div className="line">
                  <img src={line} />
                </div>

                <div className="date">
                  <img src={circle} />
                  <p>davam edir</p>
                </div>
              </div>
            </div>
            <div className="buildings-menu">
              <ul>
                <li className="card-filter">Bütün mənzillər</li>
                <li className="card-filter">Satılıb</li>
                <li className="card-filter">Kredit</li>
                <li className="card-filter">İpoteka</li>
                <li className="card-filter">Boş</li>
              </ul>
            </div>
          </div>
          <div className="cards-header-wrapper">
            <CardsHeader />
            <button onClick={() => setIsOpen(!isOpen)} className="add-new-btn">
              <i class="fas fa-plus"></i>Yeni
            </button>
            <AddBuilding isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
        </div><BuildingsCards/>
      </div>
      
    </div>
  );
}

export default Buildings;
