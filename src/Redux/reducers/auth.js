import { createReducer } from 'Helpers/redux'
import { LOG_IN, LOG_OUT } from 'Redux/actions/auth'

const initialState = {
  token: null,
  isLoading: false
}

const reducer = {
  [LOG_IN.REQUEST]: (state, action) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [LOG_IN.SUCCESS]: (state, { payload }) => {
    return {
      token: payload.token,
      isLoading: false
    }
  },
  [LOG_IN.FAILURE]: () => {
    return {
      token: null,
      isLoading: false
    }
  },
  [LOG_OUT]: state => {
    return {
      ...state,
      token: null
    }
  }
}

export default createReducer(initialState, reducer)
