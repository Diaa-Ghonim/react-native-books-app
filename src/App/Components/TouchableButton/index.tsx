import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  StyleSheet,
} from 'react-native';

interface Props {
  touchableOpacityProps?: TouchableOpacityProps;
  textProps?: TextProps;
  label: string;
}

const TouchableButton = ({
  touchableOpacityProps = {},
  textProps = {},
  label,
}: Props) => {
  const {style: textStyle, ...customTextProps} = textProps;
  return (
    <TouchableOpacity {...touchableOpacityProps}>
      <Text style={[styles.text, textStyle]} {...customTextProps}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {fontFamily: 'sans-serif-medium'},
});
export default TouchableButton;
