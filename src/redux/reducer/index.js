
import { combineReducers } from '@reduxjs/toolkit'
import user from './user';

const appReducer = combineReducers({
  user
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
