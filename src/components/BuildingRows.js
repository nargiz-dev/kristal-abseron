import React, { useEffect, useState } from "react";
import axios from "axios";
import { cardData } from "redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { creditTableHeaders, soldTableHeaders } from "data/data";
import room from "images/room.svg";
import right from "images/right.svg";
import wrong from "images/wrong.svg";
import RowAccordion from "./RowAccordion";
import "styles/BuildingRows.scss";

function BuildingRows({ selected, isSeries }) {
  const Cards = useSelector((state) => state.cardDataReducer.data);
  const [showAccordion, setShowAccordion] = useState(-1);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => dispatch(cardData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <div>
      <div className="building-rows-wrapper">
        {selected === "kredit" || selected === "ipoteka" ? (
          <div className="table-credit-headers table-headers">
            {creditTableHeaders.map((el, key) => (
              <h5>{el}</h5>
            ))}
          </div>
        ) : (
          <div className="sold-table-headers table-headers">
            {soldTableHeaders.map((el, key) => (
              <h5>{el}</h5>
            ))}
          </div>
        )}

        {Cards.map((building, key) => (
          <div
            className={
              building.kateqoriya === selected ? "row" : "building-remove row"
            }
          >
            {selected === "kredit" || selected === "ipoteka" ? (
              <>
                <div
                  className="buildings-info-row"
                  onClick={() =>
                    key === showAccordion
                      ? setShowAccordion(-1)
                      : setShowAccordion(key)
                  }
                >
                  <div className="row-element">{building.mənzilSahibi}</div>
                  <div className="row-element">
                    {building.sahesi} m<sup>2</sup>
                  </div>
                  <div className="row-element room">
                    <img src={room} />
                    {building.otaqsayi}
                  </div>
                  <div className="row-element">{building.ayliqodenis}</div>
                  <div className="row-element">{building.ilkinodenis}</div>
                  <div className="row-element">{building.mertebe}</div>
                  <div className="row-element status">
                    <img src={building.status === "ödənilib" ? right : wrong} />
                    <span
                      style={{
                        color:
                          building.status === "ödənilib"
                            ? "#219653"
                            : "#F34040",
                      }}
                    >
                      {building.status}
                    </span>
                  </div>
                  <i class="fas fa-chevron-down"></i>
                </div>
                <RowAccordion
                  show={key === showAccordion}
                  key={key}
                  row={key}
                  showAccordion={showAccordion}
                  building={building}
                  setShowAccordion={setShowAccordion}
                />
              </>
            ) : (
              <div className="sold-buildings-row">
                <div className="row-element">{building.mənzilSahibi}</div>{" "}
                <div className="row-element ">
                  {building.sahesi}m<sup>2</sup>
                </div>
                <div className="row-element room">
                  <img src={room} />
                  {building.otaqsayi}
                </div>
                <div className="row-element">{building.qiymeti}</div>
                <div className="row-element">{building.birmetrqiymeti}</div>
                <div className="row-element">{building.tarix}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuildingRows;
