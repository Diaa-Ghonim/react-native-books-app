import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './screens/Home';
import AddBook from './screens/AddBook';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AddBook: {path: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            options={{title: 'Home'}}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="AddBook" component={AddBook} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
