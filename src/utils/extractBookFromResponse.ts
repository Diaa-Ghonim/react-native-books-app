import {BooksResponse} from '../state/types';

export function extractBookFromResponse(response: BooksResponse) {
  const books = response.items.map(item => {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      description: item.volumeInfo.description,
      thumbnail: item.volumeInfo.imageLinks.thumbnail,
      publishedDate: item.volumeInfo.publishedDate,
    };
  });
  return books;
}
