import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
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
        <Switch>
        <Route path="/" exact component={Buildings} />
        <Route path="/statistika" component={Statistics} />
        <Redirect />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
