import { combineReducers } from 'redux'

export default function createReducer() {
  return combineReducers({
    globals: (state = {}, action) => state
  })
}
