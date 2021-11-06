import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "pages/Login/Login";


const Home = React.lazy(() => import('pages/Home/Home'));

function App() {
  return (
    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
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
