import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactLoading from "react-loading";

import Login from "pages/Login/Login";


const Home = React.lazy(() => import('pages/Home/Home'));

function App() {
  
  return (
    <div className="App">
    <Suspense fallback={<div className="loading-wrapper"><ReactLoading className="loading" type="spin" color="#004AA1" /></div>}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
