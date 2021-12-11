import {
  ApiRequestErrorResponse,
  GetBooksRequestSuccessResponse,
} from '../../types';
import {data} from '../../../../data';

// const URL = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&&startIndex=0&&maxR
// esults=10&&key=AIzaSyCxW6RZ3FseYeYxmvm3nw78E0a_93if7Jw`;

export const getBooksAPI = (): Promise<
  GetBooksRequestSuccessResponse | ApiRequestErrorResponse
> => {
  return Promise.resolve(data);
};
