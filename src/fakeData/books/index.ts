import {ADD_BOOK, GET_BOOKS} from '../../state/actions/books/action.types';
import {
  Book,
  BookItemFromResponse,
  BooksResponse,
  BooksState,
} from '../../state/types';

export const fakeBookFromResponse: BookItemFromResponse = {
  kind: 'books#volume',
  id: '_oG_iTxP1pIC',
  etag: 'UQw0gmPsKoM',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/_oG_iTxP1pIC',
  volumeInfo: {
    title: 'Flowers for Algernon',
    authors: ['Daniel Keyes'],
    publisher: 'Houghton Mifflin Harcourt',
    publishedDate: '2007-12-01',
    description:
      "Winner of both the Hugo and Nebula Awards, the powerful, classic story about a man who receives an operation that turns him into a genius...and introduces him to heartache. Charlie Gordon is about to embark upon an unprecedented journey. Born with an unusually low IQ, he has been chosen as the perfect subject for an experimental surgery that researchers hope will increase his intelligence-a procedure that has already been highly successful when tested on a lab mouse named Algernon. As the treatment takes effect, Charlie's intelligence expands until it surpasses that of the doctors who engineered his metamorphosis. The experiment appears to be a scientific breakthrough of paramount importance, until Algernon suddenly deteriorates. Will the same happen to Charlie?",
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9780547539638',
      },
      {
        type: 'ISBN_10',
        identifier: '0547539630',
      },
    ],
    readingModes: {
      text: true,
      image: true,
    },
    pageCount: 304,
    printType: 'BOOK',
    categories: ['Fiction'],
    averageRating: 4,
    ratingsCount: 184,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '1.13.12.0.preview.3',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com.eg/books?id=_oG_iTxP1pIC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api',
    infoLink:
      'https://play.google.com/store/books/details?id=_oG_iTxP1pIC&source=gbs_api',
    canonicalVolumeLink:
      'https://play.google.com/store/books/details?id=_oG_iTxP1pIC',
  },
  saleInfo: {
    country: 'EG',
    saleability: 'FOR_SALE',
    isEbook: true,
    listPrice: {
      amount: 199.33,
      currencyCode: 'EGP',
    },
    retailPrice: {
      amount: 199.33,
      currencyCode: 'EGP',
    },
    buyLink:
      'https://play.google.com/store/books/details?id=_oG_iTxP1pIC&rdid=book-_oG_iTxP1pIC&rdot=1&source=gbs_api',
    offers: [
      {
        finskyOfferType: 1,
        listPrice: {
          amountInMicros: 199330000,
          currencyCode: 'EGP',
        },
        retailPrice: {
          amountInMicros: 199330000,
          currencyCode: 'EGP',
        },
      },
    ],
  },
  accessInfo: {
    country: 'EG',
    viewability: 'PARTIAL',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.com.eg/books/download/Flowers_for_Algernon-sample-epub.acsm?id=_oG_iTxP1pIC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    pdf: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.com.eg/books/download/Flowers_for_Algernon-sample-pdf.acsm?id=_oG_iTxP1pIC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    webReaderLink:
      'http://play.google.com/books/reader?id=_oG_iTxP1pIC&hl=&printsec=frontcover&source=gbs_api',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      'Winner of both the Hugo and Nebula Awards, the powerful, classic story about a man who receives an operation that turns him into a genius...and introduces him to heartache.',
  },
};

export const fakeBook: Book = {
  id: '_oG_iTxP1pIC',
  title: 'Flowers for Algernon',
  publishedDate: '2007-12-01',
  description: 'Winner of both the Hugo and Nebula Awards.',
  thumbnail:
    'http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
};

export const fakeBooks: BooksResponse = {
  kind: 'books#volumes',
  totalItems: 370,
  items: [fakeBookFromResponse],
};

export const fakeBooksState: BooksState = {
  loading: false,
  books: [fakeBook],
  errMsg: '',
};

export const fakeMainStateWithBooksState: {
  books: BooksState;
} = {
  books: fakeBooksState,
};

export const fakeGetBooksPendingAction = {
  type: GET_BOOKS.PENDING,
  payload: {},
};

export const fakeGetBooksSuccessAction = {
  type: GET_BOOKS.SUCCESS,
  payload: {response: fakeBooks},
};

export const fakeGetBooksFailAction = {
  type: GET_BOOKS.ERROR,
  payload: {error: {message: 'Something Went Wrong'}},
};

export const getBooksSuccessResponse = Promise.resolve(fakeBooks);

export const fakeAddBookAction = {
  type: ADD_BOOK.ACTION,
  payload: {book: fakeBook},
};
