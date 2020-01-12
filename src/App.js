import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Header, HotFeed, NewFeed, RisingFeed } from 'components'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/hot" />
          </Route>

          <Route path="/hot" component={HotFeed} />
          <Route path="/new" component={NewFeed} />
          <Route path="/rising" component={RisingFeed} />
        </Switch>
      </Router>
    )
  }
}

export default App