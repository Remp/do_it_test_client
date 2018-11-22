import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import { apiMiddleware } from './middlewares'

export default history => {
  const enhancersCompose =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middlewares = [routerMiddleware(history), apiMiddleware]
  const composedEnhancers = enhancersCompose(applyMiddleware(...middlewares))

  return createStore(rootReducer(history), composedEnhancers)
}
