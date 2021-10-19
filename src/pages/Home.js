import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Statistics from "./Statistics";
import Buildings from "./Buildings";
import Sidebar from "../components/Sidebar";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home-wrapper">
      <Router>
        <Sidebar />
        <Route path="/" exact component={Buildings} />
        <Route path="/statistika" component={Statistics} />
      </Router>
    </div>
  );
}

export default Home;
