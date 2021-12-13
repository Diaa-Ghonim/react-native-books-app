import 'react-native';
import React from 'react';
import {renderWithState} from '../../../../../utils/ui-test.helpers';
import ListHeaderComponent from '.';
import {NavigationContainer} from '@react-navigation/native';

describe('Screens - Home - Components - ListHeaderComponent ', () => {
  it('should render ListHeader component', () => {
    const {getByText} = renderWithState(
      <NavigationContainer>
        <ListHeaderComponent />
      </NavigationContainer>,
    );
    const headerText = getByText('Books');
    expect(headerText).toBeTruthy();

    const addBookButton = getByText('Add Book');
    expect(addBookButton).toBeTruthy();
  });
});
