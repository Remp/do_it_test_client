import { createAsyncAction } from 'Helpers/redux'
import { apiCall } from './api'

export const LOG_IN = createAsyncAction('auth/log-in')
export const logIn = ({ email, password }) =>
  apiCall({
    types: LOG_IN,
    endpoint: '/auth',
    method: 'POST',
    query: {
      email,
      password
    }
  })
