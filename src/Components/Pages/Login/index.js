import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Component from './Login'

const selector = createStructuredSelector({})

const actions = {}

export const Login = connect(
  selector,
  actions
)(Component)
