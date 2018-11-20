import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routes from 'Constants/routes'
import './styles.less'
import { Login } from './Pages'

export default () => (
  <Switch>
    <Route component={Login} path={'/'} />
  </Switch>
)
