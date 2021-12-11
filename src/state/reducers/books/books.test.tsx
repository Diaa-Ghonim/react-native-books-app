import {booksInitialState, booksReducer} from '.';
import {
  fakeAddBookAction,
  fakeBook,
  fakeGetBooksFailAction,
  fakeGetBooksPendingAction,
  fakeGetBooksSuccessAction,
  invalidAction,
} from '../../../fakeData';
import {extractBookFromResponse} from '../../../utils/extractBookFromResponse';

describe('Books reducer', () => {
  describe('get books', () => {
    it('should return initial state if we pass state as undefined to reducer', () => {
      const booksState = booksReducer(undefined, invalidAction);
      expect(booksState).toEqual(booksInitialState);
    });

    it('should update loading prop to (true) when action pending dispatched', () => {
      const booksState = booksReducer(undefined, fakeGetBooksPendingAction);
      expect(booksState).toEqual({
        ...booksInitialState,
        loading: true,
      });
    });

    it('should update books in reducer when action success dispatched and change loading to (false)', () => {
      const booksState = booksReducer(undefined, fakeGetBooksPendingAction);
      const updatedBooksState = booksReducer(
        booksState,
        fakeGetBooksSuccessAction,
      );
      const books = extractBookFromResponse(
        fakeGetBooksSuccessAction.payload.response,
      );

      expect(updatedBooksState).toEqual({
        ...booksState,
        loading: false,
        books: books,
      });
    });

    it('should update loading prop to (false) when action fail dispatched.', () => {
      const booksState = booksReducer(undefined, fakeGetBooksPendingAction);
      const updatedBooksState = booksReducer(
        booksState,
        fakeGetBooksFailAction,
      );
      expect(updatedBooksState).toEqual({
        ...booksState,
        loading: false,
        errMsg: fakeGetBooksFailAction.payload.error.message,
      });
    });
  });

  describe('Add Books', () => {
    it('should add book to books array in the state when action addBook dispatced', () => {
      const booksState = booksReducer(undefined, invalidAction);
      const updatedBooksState = booksReducer(booksState, fakeAddBookAction);
      expect(updatedBooksState).toEqual({
        ...booksState,
        loading: false,
        books: [fakeBook],
      });
    });
  });
});
