import { createReducer } from 'Helpers/redux'
import { FETCH_USER, CREATE_MARKER, SAVE_MARKERS } from 'Redux/actions/user'
import { LOG_IN } from 'Redux/actions/auth'

const initialState = {
  markers: [],
  isLoading: false,
  isSaving: false
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
    const { markers } = payload
    return {
      ...state,
      markers
    }
  }
}

export default createReducer(initialState, reducer)
