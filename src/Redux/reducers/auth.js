import { createReducer } from 'Helpers/redux'
import { LOG_IN } from 'Redux/actions/auth'

const initialState = {
  token: null,
  loading: false
}

const reducer = {
  [LOG_IN.REQUEST]: (state, action) => {
    return {
      loading: true,
      ...state
    }
  },
  [LOG_IN.SUCCESS]: (state, { payload }) => {
    return {
      token: payload.token,
      loading: false
    }
  },
  [LOG_IN.FAILURE]: () => {
    return {
      token: null,
      loading: false
    }
  }
}

export default createReducer(initialState, reducer)