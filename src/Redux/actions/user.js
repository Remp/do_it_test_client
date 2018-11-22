import { createAsyncAction } from 'Helpers/redux'
import { apiCall } from './api'

export const FETCH_USER = createAsyncAction('user/FETCH_MARKERS')
export const fetchUser = () =>
  apiCall({
    types: FETCH_USER,
    endpoint: '/user',
    method: 'GET'
  })

export const CREATE_MARKER = 'user/CREATE_MARKER'
export const createMarker = ({ lat, lng }) => ({
  type: CREATE_MARKER,
  lat,
  lng
})

export const SAVE_MARKERS = 'user/SAVE_MARKERS'
export const saveMarkers = markers =>
  apiCall({
    types: SAVE_MARKERS,
    endpoint: 'user/markers',
    method: 'POST',
    query: {
      markers
    }
  })
