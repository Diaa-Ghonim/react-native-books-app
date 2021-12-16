import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Text,
} from 'react-native';
import {DatePicker, ErrorMessage, ImagePicker} from '../../Components';
import {Asset} from 'react-native-image-picker';
import {addBook} from '../../../state/actions';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// import {ScreenProps} from './types';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [photo, setPhoto] = React.useState<Asset | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const resetInputs = () => {
    setTitle('');
    setDescription('');
    setDate(null);
    setPhoto(null);
    setValidationError(null);
  };

  const onAddBook = () => {
    if (title && description && date && photo?.uri) {
      const book = {
        title,
        description,
        publishedDate: date.toLocaleDateString(),
        thumbnail: photo.uri,
        id: Math.random().toString(),
      };

      dispatch(addBook(book));
      resetInputs();
      navigation.navigate('Home' as never);
    } else {
      setValidationError('You should fill all Fields');
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (validationError) {
      timer = setTimeout(() => {
        setValidationError(null);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [validationError]);

  return (
    <ScrollView>
      <View style={style.container}>
        <TextInput
          style={style.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
        />
        <TextInput
          style={[style.input, style.textarea]}
          onChangeText={setDescription}
          value={description}
          numberOfLines={10}
          placeholder="Description"
          multiline
          maxLength={200}
          editable
        />
        <Text style={style.dateReview}>{date?.toLocaleDateString()}</Text>
        <DatePicker date={date} setDate={setDate} />
        <ImagePicker photo={photo} setPhoto={setPhoto} />
      </View>
      <View style={style.line} />
      {validationError && <ErrorMessage message={validationError} />}
      <View style={style.buttonContainer}>
        <Button color="#28a745" title="ADD BOOK" onPress={onAddBook} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: '#2f525f',
    margin: 10,
    flex: 1,
  },
  input: {
    margin: 10,
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#c1c1c1',
    borderRadius: 5,
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  textarea: {
    height: 150,
    textAlignVertical: 'top',
  },
  dateReview: {paddingLeft: 10, fontWeight: 'bold'},
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 30,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
});
export default AddBook;
