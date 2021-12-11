import {Selector} from 'react-redux';
import {GlobalState, BooksState} from '../../types';

export const selectBooksState: Selector<GlobalState, BooksState> = state =>
  state.books;
