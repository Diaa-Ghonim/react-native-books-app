import {createAction} from '../../../utils/action.helpers';
import {GET_BOOKS, ADD_BOOK} from './action.types';
import {
  GetBooks,
  GetBooksPending,
  GetBooksSuccess,
  GetBooksFail,
  AddBook,
} from '../../types';

export const getBooks: GetBooks = createAction(GET_BOOKS.ACTION);

export const getBooksPending: GetBooksPending = createAction(GET_BOOKS.PENDING);

export const getBooksSuccess: GetBooksSuccess = createAction(
  GET_BOOKS.SUCCESS,
  'response',
);

export const getBooksFail: GetBooksFail = createAction(
  GET_BOOKS.ERROR,
  'error',
);

export const addBook: AddBook = createAction(ADD_BOOK.ACTION, 'book');
