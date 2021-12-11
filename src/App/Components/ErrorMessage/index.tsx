import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  message: string;
}

export default function ErrorMessage({message}: Props): ReactElement {
  return (
    <View>
      <Text style={style.container}>{message}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 20,
    color: '#721c24',
    backgroundColor: '#f8d7da',
    borderWidth: 1,
    borderColor: '#f5c6cb',
    padding: 10,
    fontSize: 17,
    fontFamily: 'sans-serif-medium',
  },
});
