import React, {SyntheticEvent, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DateTimePickerOrigin from '@react-native-community/datetimepicker';

type AndroidMode = 'date' | 'time';
type Props = {
  date: Date | null;
  setDate: (date: Date) => void;
};
const DateTimePicker = ({date, setDate}: Props) => {
  const [mode, setMode] = useState<AndroidMode>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: SyntheticEvent, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: AndroidMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(!show);
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={style.pickButton}>PICK PUBLISHED DATE</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePickerOrigin
          testID="dateTimePicker"
          value={date || new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  pickButton: {
    color: '#fff',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    borderRadius: 5,
  },
});

export default DateTimePicker;
