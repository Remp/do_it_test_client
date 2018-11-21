import { createAsyncAction } from 'Helpers/redux'
import { GOOGLE_API_KEY } from 'Configs/googleApi'
import { api } from 'Configs/app'
import { apiCall } from './api'

export const GET_PLACES = createAsyncAction('user/GET_PLACES')
export const getPlaces = ({ type, location }) =>
  apiCall({
    types: GET_PLACES,
    url: `${
      api.proxy
    }/https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
    method: 'GET',
    query: {
      key: GOOGLE_API_KEY,
      location,
      type,
      rankby: 'distance',
      fields: 'geometry'
    }
  })
