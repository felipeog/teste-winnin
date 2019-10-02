import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "../Header/Header";
import HotFeed from "../HotFeed/HotFeed";
import NewFeed from "../NewFeed/NewFeed";
import RisingFeed from "../RisingFeed/RisingFeed";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/hot" />
          </Route>

          <Route path="/hot">
            <HotFeed />
          </Route>

          <Route path="/new">
            <NewFeed />
          </Route>

          <Route path="/rising">
            <RisingFeed />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
