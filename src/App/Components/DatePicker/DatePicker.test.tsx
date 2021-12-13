import 'react-native';
import React from 'react';
import {renderWithState} from '../../../utils/ui-test.helpers';
import DatePicker from '.';
import {fireEvent} from '@testing-library/react-native';

jest.mock('@react-native-community/datetimepicker', () => {
  const React = require('react');

  return function MockPicker(props: any) {
    return React.createElement(
      'DatePicker',
      {
        ...props,
        testID: 'dateTimePicker',
      },
      props.children,
    );
  };
});

describe('Components - DatePicker ', () => {
  it('renders DatePicker Wrapper component with picker button', () => {
    const {getByText} = renderWithState(
      <DatePicker date={new Date()} setDate={() => {}} />,
    );
    const pickerButton = getByText('PICK PUBLISHED DATE');
    expect(pickerButton).toBeTruthy();
  });

  it('shoud render DateTimePicker component when picker button pressed', () => {
    const {getByText, getByTestId} = renderWithState(
      <DatePicker date={new Date()} setDate={() => {}} />,
    );

    const pickerButton = getByText('PICK PUBLISHED DATE');
    fireEvent.press(pickerButton);
    const dateTimePicker = getByTestId('dateTimePicker');
    expect(dateTimePicker).toBeTruthy();
  });

  it('shoud call setDate function when DateTimePicker changed', () => {
    const setDateFuncMocked = jest.fn();

    const {getByText, getByTestId} = renderWithState(
      <DatePicker date={new Date()} setDate={setDateFuncMocked} />,
    );

    const pickerButton = getByText('PICK PUBLISHED DATE');
    fireEvent.press(pickerButton);
    const dateTimePicker = getByTestId('dateTimePicker');
    fireEvent(dateTimePicker, 'onChange');
    expect(setDateFuncMocked).toHaveBeenCalled();
  });
});
