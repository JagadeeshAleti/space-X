import React from "react";
import { Header } from "./Component/Header/Header";
import { LaunchList } from "./Component/LaunchList/LaunchList";
import LaunchView from "./Component/LaunchView/LaunchView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/launch/:flight_number">
            <LaunchView />
          </Route>
          <Route path="/">
            <LaunchList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
