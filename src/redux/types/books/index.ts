import {ApiRequestErrorResponse} from '../common';

export interface BookItemFromResponse {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher?: string;
    publishedDate: string;
    subtitle?: string;
    description?: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    readingModes: {
      text: boolean;
      image: boolean;
    };

    comicsContent?: boolean;

    pageCount: number;
    printType: string;
    categories: string[];
    averageRating?: number;
    ratingsCount?: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary?: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
    retailPrice?: {
      amount: number;
      currencyCode: string;
    };
    buyLink?: string;
    offers?: [
      {
        finskyOfferType: number;
        listPrice: {
          amountInMicros: number;
          currencyCode: string;
        };
        retailPrice: {
          amountInMicros: number;
          currencyCode: string;
        };
      },
    ];
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
      acsTokenLink?: string;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink?: string;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo?: {
    textSnippet: string;
  };
}

export interface Book {
  title: string;
  description: string | undefined;
  publishedDate: string;
  thumbnail: string;
  id: string;
}

export interface BooksResponse {
  kind: string;
  totalItems: number;
  items: BookItemFromResponse[];
}

export interface BooksState {
  loading: boolean;
  books: Book[];
  errMsg: string;
}

export type GetBooksRequestSuccessResponse = BooksResponse;

export interface GetBooksActionData {
  type: string;
  payload: {[key: string]: unknown};
}

export type GetBooks = () => GetBooksActionData;

export type GetBooksSuccess = (response: GetBooksRequestSuccessResponse) => {
  type: string;
  payload: {response: GetBooksRequestSuccessResponse};
};

export type GetBooksPending = () => {
  type: string;
  payload: {[key: string]: unknown};
};

export type GetBooksFail = (error: ApiRequestErrorResponse) => {
  type: string;
  payload: {error: ApiRequestErrorResponse};
};

export type AddBook = (book: Book) => {
  type: string;
  payload: {book: Book};
};
