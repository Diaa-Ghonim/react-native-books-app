import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

interface Props {
  text: string;
  style: {};
  cb: () => void;
}

const CustomButton = ({cb, style, text}: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('I am Pressed');
          cb();
        }}>
        <View style={style}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
