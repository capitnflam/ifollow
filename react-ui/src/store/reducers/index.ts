import { combineReducers } from 'redux'

const noop = (state = []) => {
  return state
}

export default combineReducers({
  noop,
})
