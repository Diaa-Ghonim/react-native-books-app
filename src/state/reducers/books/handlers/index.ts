import {addBookHandler} from './addBook';
import {getBooksHandler} from './getBooks';

export const booksHandler = {
  ...getBooksHandler,
  ...addBookHandler,
};
