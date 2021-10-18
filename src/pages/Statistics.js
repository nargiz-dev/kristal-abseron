import React from "react";
import BanksCard from "../components/BanksCard";
import Bar from "../components/Bar";
import GeneralStatistics from "../components/GeneralStatistics";
import ProjectsCard from "../components/ProjectsCard";
import LastWeekChart from "../components/LastWeekChart";
import Header from '../components/Header';
import "../styles/Statistics.scss";

function Statistics() {
  return (
    <div>
    <Header header={"Statistika"} />
    <div className="section">
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
      <div className="additional-statistics">
        <div className="statistics-cards">
          <ProjectsCard />
          <BanksCard />
        </div>
        <div className="bar-chart-wrapper">
          <div className="chart-legends">
            <h4>Son həftə</h4>
            <div className="legend-buttons">
              <button>Satılıb</button>
              <button>Kredit</button>
              <button>İpoteka</button>
            </div>
          </div>
          <LastWeekChart />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Statistics;
