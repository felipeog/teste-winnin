import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HotFeed, NewFeed, RisingFeed } from 'components'

const Router = () => (
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
)

export default Router
