import 'react-native';
import React from 'react';
import {renderWithState} from '../../../utils/ui-test.helpers';
import Home from '.';
import {NavigationContainer} from '@react-navigation/native';
import {fakeMainStateWithBooksState} from '../../../fakeData';
import {getBooks} from '../../../state/actions';

jest.mock('../../../state/actions/books/index', () => ({
  getBooks: jest.fn(() => ({type: ''})),
}));
describe('Screens - Home ', () => {
  it('shoud render one book item from state', () => {
    const {getByTestId} = renderWithState(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
      {initialState: fakeMainStateWithBooksState},
    );
    expect(getBooks).toHaveBeenCalled();
    const bookItem = getByTestId('bookItem');
    expect(bookItem).toBeTruthy();
  });

  it('shoud render loading if state is loading', () => {
    const {getByTestId} = renderWithState(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
      {
        initialState: {
          books: {
            ...fakeMainStateWithBooksState.books,
            books: [],
            loading: true,
          },
        },
      },
    );
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });

  it('shoud render error message if state has error', () => {
    const {getByText} = renderWithState(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
      {
        initialState: {
          books: {
            ...fakeMainStateWithBooksState.books,
            books: [],
            loading: false,
            errMsg: 'Something Went Wrong',
          },
        },
      },
    );
    const errorMessage = getByText('Something Went Wrong');
    expect(errorMessage).toBeTruthy();
  });
});
