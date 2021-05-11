import { combineReducers } from 'redux'
import { items, fetchHasErrored, fetchLoading } from './itemReducer';

export default combineReducers({
  items,
  fetchHasErrored,
  fetchLoading,
})
