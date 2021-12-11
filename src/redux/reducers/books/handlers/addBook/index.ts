import {ADD_BOOK} from '../../../../actions/books/action.types';
import {Book, BooksState} from '../../../../types';

export const addBookHandler = {
  [ADD_BOOK.ACTION]: (draftState: BooksState, {book}: {book: Book}) => {
    draftState.books = [book, ...draftState.books];
  },
};
