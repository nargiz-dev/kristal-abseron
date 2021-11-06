import React from "react";
import BanksCard from "components/BanksCard";
import Area from "components/Area";
import GeneralStatistics from "components/GeneralStatistics";
import ProjectsCard from "components/ProjectsCard";
import LastWeekChart from "components/LastWeekChart";
import "styles/Statistics.scss";

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
