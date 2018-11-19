export const createReducer = (initialState, reducer) => {
  return (state = initialState, action) =>
    reducer[action.type] ? reducer[action.type](state, action) : state
}

export const createAsyncAction = name => ({
  REQUEST: `${name}/REQUEST`,
  SUCCESS: `${name}/SUCCESS`,
  FAILURE: `${name}/FAILURE`
})
