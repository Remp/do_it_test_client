import { createReducer } from 'Helpers/redux'
import { FETCH_USER, CREATE_MARKER } from 'Redux/actions/user'

const initialState = {
  markers: [],
  isLoading: false
}

const reducer = {
  [FETCH_USER.REQUEST]: state => {
    return {
      isLoading: true,
      ...state
    }
  },
  [FETCH_USER.SUCCESS]: (state, { payload }) => {
    return {
      isLoading: false,
      markers: payload.markers
    }
  },
  [FETCH_USER.FAILURE]: (state, { paylaod }) => {
    return {
      isLoading: false
    }
  },
  [CREATE_MARKER]: (state, { lat, lng }) => {
    const markers = state.markers.splice(0)
    markers.push({
      coords: { lat, lng },
      isLocal: true
    })

    return {
      ...state,
      markers

    }
  }
}

export default createReducer(initialState, reducer)
