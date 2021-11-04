import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useLocation } from "react-router";
import Header from "components/Header";

import Buildings from "./Buildings";
import Sidebar from "components/Sidebar";
import "styles/Home.scss";
const Statistics = React.lazy(() => import("pages/Statistics"));
function Home() {
  const width = window.innerWidth;

  const breakpoint = 1024;

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [headerTitle, setHeaderTitle] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setSidebarOpen(true);
      } else if (window.innerWidth <= 1024) {
        setSidebarOpen(false);
      }
    });
  });

  return (
    <div className="home-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            headerTitle={headerTitle}
            setHeaderTitle={setHeaderTitle}
          />
          <div className="right-side-wrapper">
            <Header
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              header={headerTitle === "statistika" ? "Statistika" : "Binalar"}
            />

            <Switch>
              <Route path="/home/binalar" exact component={Buildings} />
              <Route path="/home/statistika" component={Statistics} />
              <Route path="/ipotekalar" component={Buildings} />
              <Route path="/musteriler" component={Buildings} />
              <Route path="/kreditler" component={Buildings} />
              <Route path="/bildirisler" component={Buildings} />
              <Route path="/kalendar" component={Buildings} />
              <Route path="/mesajlar" component={Buildings} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default Home;
