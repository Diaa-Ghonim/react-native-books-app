import {extractBookFromResponse} from '../../../../../utils/extractBookFromResponse';
import {GET_BOOKS} from '../../../../actions/books/action.types';
import {
  ApiRequestErrorResponse,
  BooksState,
  GetBooksRequestSuccessResponse,
} from '../../../../types';

export const getBooksHandler = {
  [GET_BOOKS.PENDING]: (draftState: BooksState) => {
    draftState.loading = true;
  },

  [GET_BOOKS.SUCCESS]: (
    draftState: BooksState,
    {response}: {response: GetBooksRequestSuccessResponse},
  ) => {
    draftState.loading = false;
    const books = extractBookFromResponse(response);
    draftState.books = books;
  },

  [GET_BOOKS.ERROR]: (
    draftState: BooksState,
    {error}: {error: ApiRequestErrorResponse},
  ) => {
    draftState.loading = false;
    draftState.errMsg = error.message;
  },
};
