import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { logIn } from 'Redux/actions/auth'
import { getToken } from 'Redux/selectors/auth'
import Component from './Login'

const selector = createStructuredSelector({
  token: getToken
})

const actions = {
  onLogIn: logIn
}

export const Login = withRouter(
  connect(
    selector,
    actions
  )(Component)
)
