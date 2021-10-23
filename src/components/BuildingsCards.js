import axios from "axios";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { cardData } from "redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import CardAccordion from './CardAccordion';


import "styles/BuildingCard.scss";
import BuildingCard from "./BuildingCard";

function BuildingsCards() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const Cards = useSelector((state) => state.cardDataReducer.data);
  const grouppedBuildings = _.groupBy(Cards, "mertebe");

  const [whichOpen, setWhichOpen] = useState(-1);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => dispatch(cardData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="cards-wrapper">
      {Object.keys(grouppedBuildings).map((key) => (
        <div className="card-groups">
          <h3>{key}</h3>
          {grouppedBuildings[key].map((building, index) => (<div className="wrapper">
            <div className="card-wrapper"  >
              <BuildingCard
              
             key={key}
                data={data}
                building={building}
                setData={setData}
                whichOpen={whichOpen}
                setWhichOpen={setWhichOpen}
                isOpen={(index+key) === whichOpen }
                index={index}
            which={index+key} />   

            </div>
            <CardAccordion
            key={key}
                data={data}
                building={building}
                setData={setData}
                whichOpen={whichOpen}
                setWhichOpen={setWhichOpen}
                isOpen={(index+key) === whichOpen }
                index={index}
            which={index+key}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BuildingsCards;
