import { createReducer } from 'Helpers/redux'
import { GET_PLACES } from 'Redux/actions/map'

const initialState = {
  markers: [],
  isLoading: true,
  currentPlace: null
}

const reducer = {
  [GET_PLACES.REQUEST]: state => {
    return {
      isLoading: true,
      ...state
    }
  },
  [GET_PLACES.SUCCESS]: (state, { payload }) => {
    const markers = payload.results.map(marker => ({
      coords: marker.geometry.location
    }))

    return {
      isLoading: false,
      markers
    }
  },
  [GET_PLACES.FAILURE]: (state, { payload }) => {
    return {
      isLoading: false
    }
  }
}

export default createReducer(initialState, reducer)
