import {BooksState} from '../../types';

export type GlobalState = Readonly<{
  books: BooksState;
}>;

export interface Action {
  type: string;
  payload: any;
}

export type FakeGlobalState = Readonly<{
  books?: BooksState;
}>;

export interface ApiRequestErrorResponse {
  message: string;
  // error: {
  // };
}
