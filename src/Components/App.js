import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as routes from 'Constants/routes'
import { getToken } from 'Redux/selectors/auth'
import { About, Login, Main } from './Pages'
import { PrivateRoute } from './Blocks'
import './styles.less'

const App = ({ token }) => (
  <Switch>
    <Route component={Login} path={routes.login} />
    <PrivateRoute component={About} path={routes.about} token={token} />
    <PrivateRoute component={Main} path={routes.main} token={token} />
    <Redirect to={routes.login} />
  </Switch>
)

const selector = createStructuredSelector({
  token: getToken
})

export default withRouter(connect(selector)(App))
