import React, { useEffect, useState } from "react";
import axios from "axios";
import { cardData } from "redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { creditTableHeaders, soldTableHeaders } from "data/data";
import "styles/BuildingRows.scss";
function BuildingRows({ selected }) {
  const Cards = useSelector((state) => state.cardDataReducer.data);
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

        {Cards.map((elem, key) => (
          <div
            className={
              elem.kateqoriya === selected ? "row" : "building-remove row"
            }
          >
            {selected === "kredit" || selected === "ipoteka" ? (
              <div>
                  <div>{elem.mənzilSahibi}</div>
                  <div>{elem.sahesi}</div>
                  <div>{elem.otaqsayi}</div>
                  <div>{elem.ayliqodenis}</div>
                  <div>{elem.ilkinodenis}</div>
                  <div>{elem.mertebe}</div>
                  <div>gecikib</div>
              </div>
            ) : (
              <div></div>
            )}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuildingRows;
