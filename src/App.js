import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Header, HotFeed, NewFeed, RisingFeed } from 'components'

const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route exact path="/">
        <Redirect to="/hot" />
      </Route>

      <Route path="/hot" component={HotFeed} />
      <Route path="/new" component={NewFeed} />
      <Route path="/rising" component={RisingFeed} />

      <Route>
        <Redirect to="/hot" />
      </Route>
    </Switch>
  </Router>
)

export default App
