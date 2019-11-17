import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

export default () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
  </Switch>
)
