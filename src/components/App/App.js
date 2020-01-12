import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from '../Header/Header'
import HotFeed from '../HotFeed/HotFeed'
import NewFeed from '../NewFeed/NewFeed'
import RisingFeed from '../RisingFeed/RisingFeed'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path={['/', '/hot']} component={HotFeed} />
          <Route path="/new" component={NewFeed} />
          <Route path="/rising" component={RisingFeed} />
        </Switch>
      </Router>
    )
  }
}

export default App
