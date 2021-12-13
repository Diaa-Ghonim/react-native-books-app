import 'react-native';
import React from 'react';
import {renderWithState} from '../../../../../utils/ui-test.helpers';
import BookItem from '.';
import {fakeBook} from '../../../../../fakeData';
import {fireEvent} from '@testing-library/react-native';

describe('Screens - Home - Components - BookItem', () => {
  it('should render bookItem with book props', () => {
    const {getByText, getByTestId} = renderWithState(
      <BookItem book={fakeBook} />,
    );
    const bookTitle = getByText('Flowers for Algernon');
    expect(bookTitle).toBeTruthy();

    const bookDescription = getByText(
      'Winner of both the Hugo and Nebula Awards.',
    );
    expect(bookDescription).toBeTruthy();

    const bookPublisedDate = getByText('Published on: 2007-12-01');
    expect(bookPublisedDate).toBeTruthy();

    const bookThumbnail = getByTestId('bookThumbnail');
    expect(bookThumbnail).toBeTruthy();
  });

  it('should render showmore button if description length > 100 letter', () => {
    const description =
      "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius.";

    const {getByText} = renderWithState(
      <BookItem book={{...fakeBook, description}} />,
    );
    const slicedDescription = getByText(
      'The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor ...',
    );
    expect(slicedDescription).toBeTruthy();

    const showmoreButton = getByText('show more');
    expect(showmoreButton).toBeTruthy();
  });

  it('should render all description && render lessmore button if showmore button clicked', () => {
    const description =
      "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius.";

    const {getByText} = renderWithState(
      <BookItem book={{...fakeBook, description}} />,
    );

    const showmoreButton = getByText('show more');
    fireEvent.press(showmoreButton);

    const allDescription = getByText(description);
    expect(allDescription).toBeTruthy();

    const lessmoreButton = getByText('less more');
    expect(lessmoreButton).toBeTruthy();
  });

  it('should not showmore button if book description is less than 100 letter', () => {
    const description = 'The classic novel';

    const {queryByText} = renderWithState(
      <BookItem book={{...fakeBook, description}} />,
    );

    const showmoreButton = queryByText('show more');
    expect(showmoreButton).not.toBeTruthy();
  });

  it('should render no description text if no book description', () => {
    const description = '';

    const {queryByText} = renderWithState(
      <BookItem book={{...fakeBook, description}} />,
    );

    const noDescriptionText = queryByText('No Description');
    expect(noDescriptionText).toBeTruthy();
  });
});
