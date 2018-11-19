import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'

export default history => {
  const enhancersCompose =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middlewares = []
  const composedEnhancers = enhancersCompose(applyMiddleware(...middlewares))

  return createStore(rootReducer(history), composedEnhancers)
}
