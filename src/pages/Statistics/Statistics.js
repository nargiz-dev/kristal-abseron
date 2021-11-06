import React from "react";
import BanksCard from "components/statisticsCards/BanksCard";
import Area from "components/charts/Area";
import GeneralStatistics from "components/statisticsCards/GeneralStatistics";
import ProjectsCard from "components/statisticsCards/ProjectsCard";
import LastWeekChart from "components/charts/LastWeekChart";
import "./Statistics.scss";

function Statistics() {
  return (
    <div>
      <div className="section">
        <div className="statistics-wrapper">
          <div className="main-statistics">
            <div className="chart-wrapper">
              <Area className="area-chart" />
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
            
        
              <LastWeekChart />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
