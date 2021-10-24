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
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const newButtonColor = (selected) => {
    if (selected === "satilib") return { backgroundColor: "#219653" };
    else if (selected === "ipoteka") return { backgroundColor: "#EA8A31" };
    else if (selected === "kredit") return { backgroundColor: "#9B51E0" };
    else return { backgroundColor: "#004AA1" };
  };
  return (
    <div className="buildings">
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
                <li className="card-filter">
                  <button onClick={() => setSelected()}>Bütün mənzillər</button>
                </li>
                <li className="card-filter">
                  <button onClick={() => setSelected("satilib")}>
                    Satılıb
                  </button>
                </li>
                <li className="card-filter">
                  <button onClick={() => setSelected("kredit")}>Kredit</button>
                </li>
                <li className="card-filter">
                  <button onClick={() => setSelected("ipoteka")}>
                    İpoteka
                  </button>
                </li>
                <li className="card-filter">
                  <button onClick={() => setSelected("boş")}>Boş</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="cards-header-wrapper">
            <CardsHeader />
            {selected !== undefined ? (
              <div className="table-card-button">
                <button className="card-button shape-btn">Cədvəl</button>
                <button className="table-button shape-btn">Sıra</button>
              </div>
            ) : (
              " "
            )}
            <button
              onClick={() => setIsActive(!isActive)}
              style={newButtonColor(selected)}
              className="add-new-btn"
            >
              <i class="fas fa-plus"></i>Yeni
            </button>
            <AddBuilding isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
        <BuildingsCards selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}

export default Buildings;
