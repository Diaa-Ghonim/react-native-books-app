import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText, TouchableButton} from '../../../../Components';
// import {ScreenProps} from '../../types';

const ListHeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <CustomText style={style.headerText}>Books</CustomText>
      <TouchableButton
        label="Add Book"
        touchableOpacityProps={{
          onPress: () => navigation.navigate('AddBook' as never),
        }}
        textProps={{style: style.button}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // backgroundColor: '#2f525f',
    // backgroundColor: '#00baff',
    backgroundColor: '#778899',
    // backgroundColor: '#708090',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    color: '#2f525f',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 17,
  },
});

export default ListHeaderComponent;
