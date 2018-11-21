import { createSelector } from 'reselect'

const mapData = store => store.map

export const getPlaceMarkers = createSelector(
  mapData,
  data => data.markers
)
