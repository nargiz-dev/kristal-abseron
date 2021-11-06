import React from "react";
import { generalStatistics } from "data/data";
import './GeneralStatistics.scss';
function GeneralStatistics() {
  return (
    <div className="general-statistics">
        <ul>
      {generalStatistics.map((item, index) => {
        return (
          <li key={index} >
            <h5 className={item.cName}>{item.header} </h5>
            <p>{item.value}</p>
          </li>
        );
      })}
      </ul>
    </div>
  );
}

export default GeneralStatistics;
