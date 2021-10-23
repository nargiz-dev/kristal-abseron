import axios from "axios";
import React, { useEffect, useState } from "react";
import CardAccordion from "./CardAccordion";

function BuildingCard({ building, key, index, isOpen, setWhichOpen, which }) {
  const HeaderColor = (category) => {
    if (category === "kredit") return { backgroundColor: "#9B51E0" };
    else if (category === "ipoteka") return { backgroundColor: "#EA8A31" };
    else if (category === "satilib") return { backgroundColor: "#219653" };
    else return { backgroundColor: "#004AA1" };
  };
  const svgColor = (category) => {
    if (category === "kredit") return { fill: "#9B51E0" };
    else if (category === "ipoteka") return { fill: "#EA8A31" };
    else if (category === "satilib") return { fill: "#219653" };
    else return { fill: "#004AA1" };
  };
  const spanColor = (category) => {
    if (category === "kredit") return { color: "#9B51E0" };
    else if (category === "ipoteka") return { color: "#EA8A31" };
    else if (category === "satilib") return { color: "#219653" };
    else return { color: "#004AA1" };
  };
  return (
    <>
      <div
        className="card-container"
        onClick={() => (isOpen ? setWhichOpen(-1) : setWhichOpen(which))}
        style={{ height: isOpen ? "360px" : "110px" }}
      >
        <div className="different-color">
          <div
            className="building-category"
            style={HeaderColor(building.kateqoriya)}
          >
            <span>{building.kateqoriya}</span>
          </div>
          <div className="room-number">
            <svg
              style={svgColor(building.kateqoriya)}
              className="icon"
              fill="current"
              stroke="current"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="room"
                d="M2.62369 0V0.661523H0.0366211V13.8602H0.993057V1.61796H2.62369V15L8.96328 13.8602V11.9952V1.14213L2.62369 0ZM3.78994 8.01408C3.57683 8.01408 3.40405 7.78928 3.40405 7.51197C3.40405 7.23469 3.57683 7.00989 3.78994 7.00989C4.00305 7.00989 4.17583 7.23469 4.17583 7.51197C4.17583 7.78928 4.00305 8.01408 3.78994 8.01408Z"
              />
            </svg>

            <span style={spanColor(building.kateqoriya)}>
              {building.otaqsayi}
            </span>
          </div>
        </div>
        <div className="card-text">
          <p>
            {building.sahesi}m<sup>2</sup>
          </p>
          <p>{building.qiymeti}</p>
        </div>
      </div>
    </>
  );
}

export default BuildingCard;
