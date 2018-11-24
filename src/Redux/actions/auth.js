import { createAsyncAction } from 'Helpers/redux'
import { apiCall } from './api'

export const LOG_IN = createAsyncAction('auth/LOG_IN')
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

export const LOG_OUT = 'auth/LOG_OUT'
export const logOut = () => ({
  type: LOG_OUT
})
