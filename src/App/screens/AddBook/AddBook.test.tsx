import 'react-native';
import React from 'react';
import {renderWithState} from '../../../utils/ui-test.helpers';
import AddBook from '.';
import {NavigationContainer} from '@react-navigation/native';

describe('Screens - AddBook ', () => {
  it('renders AddBook screen', () => {
    const {getByText, getByPlaceholderText} = renderWithState(
      <NavigationContainer>
        <AddBook />
      </NavigationContainer>,
    );
    const titleInput = getByPlaceholderText('Title');
    expect(titleInput).toBeTruthy();

    const descriptionInput = getByPlaceholderText('Description');
    expect(descriptionInput).toBeTruthy();

    const pickPublishedDateButton = getByText('PICK PUBLISHED DATE');
    expect(pickPublishedDateButton).toBeTruthy();

    const uploadThumbnail = getByText('Upload Thumbnail');
    expect(uploadThumbnail).toBeTruthy();

    const addBookButton = getByText('ADD BOOK');
    expect(addBookButton).toBeTruthy();
  });
});
