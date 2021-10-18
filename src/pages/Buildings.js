import React, { useState } from "react";
import Header from "../components/Header";
import SelectRezidens from "../components/SelectRezidens";
import circle from "../images/circle.svg";
import line from "../images/line.svg";
import CardsHeader from "../components/CardsHeader";
import "../styles/Buildings.scss";
import AboutProject from "../components/AboutProject";

function Buildings() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AboutProject open={open} setOpen={setOpen} />
      <Header header={"Binalar"} />
      <div className="section">
        <div className="buildings-wrapper">
          <div className="buildings-header-container">
            <div className="buildings-header">
              <SelectRezidens />
              <button onClick={() => setOpen(!open)}>Layihə haqqında</button>
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
            <button className="add-new-btn">
              {" "}
              <i class="fas fa-plus"></i>Yeni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buildings;
