import axios from "axios";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { cardData } from "redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import CardAccordion from "./CardAccordion";
import BuildingCard from "./BuildingCard";
import BuildingRows from "./BuildingRows";

import "styles/BuildingCard.scss";

function BuildingsCards({ selected, setSelected, isSeries, setIsSeries }) {
  const dispatch = useDispatch();
  const Cards = useSelector((state) => state.cardDataReducer.data);
  const grouppedBuildings = _.groupBy(Cards, "mertebe");
  const sortedKeys = _.keys(grouppedBuildings).sort((a, b) => b - a);

  const [whichOpen, setWhichOpen] = useState(-1);
  const keySuffix = (key) => {
    if (
      key === "11" ||
      key === "15" ||
      key === "7" ||
      key === "8" ||
      key === "12" ||
      key === "17"
    ) {
      return "-ci";
    } else if (key === "9" || key === "10") {
      return "-cu";
    } else if (key === "13" || key === "14") {
      return "-cü";
    } else {
      return "-cı";
    }
  };

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => dispatch(cardData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      {isSeries === "table" || isSeries === undefined || selected === "boş" ? (
        <div className="cards-wrapper">
          {sortedKeys.map((key) => (
            <div className="card-groups">
              <p className="card-group-name">{key + keySuffix(key)}</p>
              <div className="cards-container">
                {grouppedBuildings[key].map((building, index) => (
                  <div className="wrapper">
                    <div className="card-wrapper">
                      <BuildingCard
                        selected={selected}
                        key={key}
                        building={building}
                        whichOpen={whichOpen}
                        setWhichOpen={setWhichOpen}
                        isOpen={index + key === whichOpen}
                        index={index}
                        which={index + key}
                      />
                    </div>
                    {building.kateqoriya === selected ||
                    selected === undefined ? (
                      <CardAccordion
                        key={key}
                        building={building}
                        whichOpen={whichOpen}
                        setWhichOpen={setWhichOpen}
                        isOpen={index + key === whichOpen}
                        index={index}
                        which={index + key}
                        selected={selected}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <BuildingRows isSeries={isSeries} selected={selected} />
      )}
    </>
  );
}

export default BuildingsCards;
