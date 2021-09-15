import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./modules/landingPage/landingPage";
import Home from "./modules/home/index";
import CountryDetail from "./modules/CountriesCards/CountryDetail";
import postActivities from "./modules/ActivitiesCards/postActivities";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route
            exact
            path="/createactivity"
            component={postActivities}
          ></Route>

          <Route
            exact
            path="/detail/:id"
            render={(match) => (
              <>
                <CountryDetail match={match}></CountryDetail>
              </>
            )}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
