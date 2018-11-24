import { createReducer } from 'Helpers/redux'
import { FETCH_USER, CREATE_MARKER, SAVE_MARKERS } from 'Redux/actions/user'
import { LOG_IN, LOG_OUT } from 'Redux/actions/auth'

const parseMarkers = markers =>
  markers.map(marker => ({
    coords: marker
  }))

const initialState = {
  markers: [],
  isLoading: false,
  isSaving: false,
  email: ''
}

const reducer = {
  [FETCH_USER.REQUEST]: state => {
    return {
      ...state,
      isLoading: true
    }
  },
  [FETCH_USER.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      markers: parseMarkers(payload.markers),
      email: payload.email
    }
  },
  [FETCH_USER.FAILURE]: (state, { paylaod }) => {
    return {
      ...state,
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
  },
  [SAVE_MARKERS.REQUEST]: (state, action) => {
    return {
      ...state,
      isSaving: true
    }
  },
  [SAVE_MARKERS.SUCCESS]: (state, { payload }) => {
    const markers = state.markers.map(marker => ({
      ...marker,
      isLocal: false
    }))

    return {
      ...state,
      isSaving: false,
      markers
    }
  },
  [SAVE_MARKERS.FAILURE]: (state, { payload }) => {
    return {
      ...state,
      isSaving: false
    }
  },
  [LOG_IN.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      markers: parseMarkers(payload.markers)
    }
  },
  [LOG_OUT]: () => {
    return initialState
  }
}

export default createReducer(initialState, reducer)
