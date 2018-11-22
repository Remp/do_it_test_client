import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import { apiMiddleware } from './middlewares'

const persistorConfis = {
  storage,
  key: 'root'
}

export default history => {
  const enhancersCompose =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middlewares = [routerMiddleware(history), apiMiddleware]
  const composedEnhancers = enhancersCompose(applyMiddleware(...middlewares))

  const persistedReducer = persistReducer(persistorConfis, rootReducer(history))
  const store = createStore(
    persistedReducer,
    composedEnhancers(applyMiddleware(...middlewares))
  )
  const persistor = persistStore(store)

  return { store, persistor }
}
