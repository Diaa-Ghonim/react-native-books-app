import 'react-native';
import React from 'react';
import {renderWithState} from '../../../utils/ui-test.helpers';
import ErrorMessage from '.';

describe('Components - ErrorMessage ', () => {
  it('renders ErrorMessage component with message prop', () => {
    const {getByText} = renderWithState(
      <ErrorMessage message="Something Went Wrong" />,
    );
    const errorMessage = getByText('Something Went Wrong');
    expect(errorMessage).toBeTruthy();
  });
});
