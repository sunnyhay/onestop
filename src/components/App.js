import React from "react";
//import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/Home";
import AboutPage from "./about/About";
import HeaderPage from "./common/Header";
import DestPage from "./dest/Dest";
import ServicePage from "./service/Service";
import StudyPage from "./study/Study";
import WorkPage from "./work/Work";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <HeaderPage />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dest" component={DestPage} />
        <Route path="/study" component={StudyPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
