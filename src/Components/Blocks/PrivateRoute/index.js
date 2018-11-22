import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import * as routes from 'Constants/routes'

export const PrivateRoute = ({ token, component: Component, path }) => (
  <Route
    path={path}
    render={props =>
      token ? <Component {...props} /> : <Redirect to={routes.login} />
    }
  />
)
