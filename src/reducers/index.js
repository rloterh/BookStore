import { combineReducers } from 'redux';
import bookReducer from './books';
import filterBookReducer from './filter';

const reducer = combineReducers({ bookReducer, filterBookReducer });

export default reducer;
