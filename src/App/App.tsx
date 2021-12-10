/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustumButton from '../Components/Button';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <CustumButton
        style={styles.customBtn}
        cb={() => setCount(count + 1)}
        text={'count'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  count: {
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
  },
  customBtn: {
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#ddd',
    // color: 'white',
  },
});

export default App;
