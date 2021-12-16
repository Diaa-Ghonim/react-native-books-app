import React from 'react';
import {StyleSheet, Text, View, TextProps} from 'react-native';

interface Props extends TextProps {
  children?: any;
}
const CustomText = ({style, ...props}: Props) => {
  return (
    <View>
      <Text style={[styles.text, style]} {...props}>
        {props.children}
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'sans-serif-medium',
    fontSize: 17,
  },
});
