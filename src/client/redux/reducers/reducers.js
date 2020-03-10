import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { detailReducer } from './detailReducer';

const reducers = combineReducers({
  moviesReducer,
  detailReducer,
});

export default reducers;
