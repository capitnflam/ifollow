import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

export interface StoreState {
  mainMenu: { open: boolean }
}

export const configureStore = (preloadedState: StoreState) => {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    preloadedState as any,
    middlewareEnhancer,
  )

  return store
}

export const INITIAL_STATE = { mainMenu: { open: false } }
