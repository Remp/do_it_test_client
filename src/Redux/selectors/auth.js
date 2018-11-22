import { createSelector } from 'reselect'

const authData = store => store.auth

export const getToken = createSelector(
  authData,
  data => data.token
)
