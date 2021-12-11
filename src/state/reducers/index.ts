import {combineReducers} from 'redux';
import {booksReducer as books} from './books';

export const reducers = () =>
  combineReducers({
    books,
  });
