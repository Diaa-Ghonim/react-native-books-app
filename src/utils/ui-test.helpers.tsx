import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import {configureStore} from '../state/store';

export const renderWithState = (
  ui: ReactElement,
  {initialState, ...renderOptions}: any = {},
) => {
  const store = configureStore(initialState);
  const Wrapper = ({children}: {children: ReactElement}) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, {wrapper: Wrapper, ...renderOptions});
};
