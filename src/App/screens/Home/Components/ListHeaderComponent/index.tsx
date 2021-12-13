import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {ScreenProps} from '../../types';

const ListHeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.headerText}>Books</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddBook' as never)}>
        <Text style={style.button}>Add Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#2f525f',
    // backgroundColor: 'white',
    // backgroundColor: '#00baff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  headerText: {
    // color: '#5e6a76',
    color: '#cee9f3',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    fontSize: 17,
  },
  button: {
    backgroundColor: 'white',
    color: '#2f525f',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontFamily: 'sans-serif-medium',
    fontSize: 17,
  },
});

export default ListHeaderComponent;
