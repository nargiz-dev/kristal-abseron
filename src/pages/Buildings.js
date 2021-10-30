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
  const [isSeries, setIsSeries] = useState(undefined);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentShape, setCurrentShape] = useState("cedvel");

  const borderColor = (category) => {
    if (category === "kredit") return { borderColor: "#9B51E0" };
    else if (category === "ipoteka") return { borderColor: "#EA8A31" };
    else if (category === "satilib") return { borderColor: "#219653" };
    else if (selected === undefined || selected === "boş")
      return { borderColor: "#004AA1" };
  };
  const newButtonColor = (selected) => {
    if (selected === "satilib") return { backgroundColor: "#219653" };
    else if (selected === "ipoteka") return { backgroundColor: "#EA8A31" };
    else if (selected === "kredit") return { backgroundColor: "#9B51E0" };
    else return { backgroundColor: "#004AA1" };
  };
  const onClickFuntions = () => {
    setSelected();
    setIsSeries("table");
    setCurrentFilter("all");
    setCurrentShape("cedvel");
  };
  return (
    <div className="buildings">
    
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
                  <button
                    onClick={onClickFuntions}
                    style={{
                      borderBottom:
                        currentFilter === "all" ? "4px solid #004AA1" : "none",
                        fontWeight:currentFilter==="all" ? "bold" : "normal"
                    }}
                  >
                    Bütün mənzillər
                  </button>
                </li>
                <li className="card-filter">
                  <button
                    onClick={() =>
                      setSelected("satilib") || setCurrentFilter("satilib")
                    }
                    style={{
                      borderBottom:
                        currentFilter === "satilib"
                          ? "4px solid #219653"
                          : "none",
                          fontWeight:currentFilter==="satilib" ? "bold" : "normal"
                    }}
                  >
                    Satılıb
                  </button>
                </li>
                <li className="card-filter">
                  <button
                    onClick={() =>
                      setSelected("kredit") || setCurrentFilter("kredit")
                    }
                    style={{
                      borderBottom:
                        currentFilter === "kredit"
                          ? "4px solid #9B51E0"
                          : "none",
                          fontWeight:currentFilter==="kredit" ? "bold" : "normal"
                    }}
                  >
                    Kredit
                  </button>
                </li>
                <li className="card-filter">
                  <button
                    onClick={() =>
                      setSelected("ipoteka") || setCurrentFilter("ipoteka")
                    }
                    style={{
                      borderBottom:
                        currentFilter === "ipoteka"
                          ? "4px solid #EA8A31"
                          : "none",
                          fontWeight:currentFilter==="ipoteka" ? "bold" : "normal"
                    }}
                  >
                    İpoteka
                  </button>
                </li>
                <li className="card-filter">
                  <button
                    onClick={() =>
                      setSelected("boş") || setCurrentFilter("bos")
                    }
                    style={{
                      borderBottom:
                        currentFilter === "bos" ? "4px solid #004AA1" : "none",
                        fontWeight:currentFilter==="bos" ? "bold" : "normal"
                    }}
                  >
                    Boş
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="cards-header-wrapper">
            <CardsHeader />
            {selected !== undefined ? (
              <div className="table-card-button">
                <button
                  className="card-button shape-btn"
                  onClick={() =>
                    setIsSeries("table") || setCurrentShape("cedvel")
                  }
                  style={{
                    backgroundColor:
                      currentShape === "cedvel" ? "#004AA1" : "#ffff",
                    color: currentShape === "cedvel" ? "#fff" : "black",
                  }}
                >
                  Cədvəl
                </button>
                <button
                  className="table-button shape-btn"
                  onClick={() => setIsSeries("row") || setCurrentShape("sira")}
                  style={{
                    backgroundColor:
                      currentShape === "sira" ? "#004AA1" : "#ffff",
                    color: currentShape === "sira" ? "#fff" : "black",
                  }}
                >
                  Sıra
                </button>
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
        <BuildingsCards
          setIsSeries={setIsSeries}
          isSeries={isSeries}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}

export default Buildings;
