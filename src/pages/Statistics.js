import React from "react";
import Bar from "../components/Bar";
import GeneralStatistics from "../components/GeneralStatistics";
import "../styles/Statistics.scss";

function Statistics() {
  return (
    <div className="statistics-wrapper">
      <div className="main-statistics">
        <div className="chart-wrapper">
          <div className="legends">
            <h5>Ümumi satış</h5>
            <div className="chart-buttons">
              <button>Son 12 ay</button>
              <button>Son 8 həftə</button>
              <button>Son 30 gün</button>
            </div>
          </div>
          <Bar className="area-chart" />
        </div>
        <div className="general-statistics-wrapper">
          <GeneralStatistics />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
