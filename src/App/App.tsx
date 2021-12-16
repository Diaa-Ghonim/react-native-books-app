import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../state/store';
import Drawer from './Drawer';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  AddBook: {path: string};
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
