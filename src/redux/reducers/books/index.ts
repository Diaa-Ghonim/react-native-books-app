import {createReducer} from '../../../utils/createReducer';
import {BooksState} from '../../types';
import {booksHandler} from './handlers';

export const booksInitialState: BooksState = {
  loading: false,
  books: [],
  errMsg: '',
};

export const booksReducer = createReducer(booksInitialState, booksHandler);
