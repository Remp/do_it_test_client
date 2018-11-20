import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Component from './Main'

const selector = createStructuredSelector({})

const actions = {}

export const Main = connect(
  selector,
  actions
)(Component)
