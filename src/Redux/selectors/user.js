import { createSelector } from 'reselect'

const userData = store => store.user

export const getUserMarkers = createSelector(
  userData,
  data => data.markers
)
