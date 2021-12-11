import React from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';
import {
  launchImageLibrary,
  // launchCamera,
  Asset,
} from 'react-native-image-picker';

type Props = {photo: Asset | null; setPhoto: (photo: Asset) => void};
const ImagePicker = ({photo, setPhoto}: Props) => {
  const handleChoosePhoto = async () => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});
      // const response = await launchCamera({mediaType: 'photo'});
      if (response && response.assets) {
        const image = response.assets[0];
        console.log(image);

        setPhoto(image);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={style.container}>
      {photo && (
        <>
          <Image source={{uri: photo.uri}} style={style.image} />
        </>
      )}
      <Button title="Upload Thumbnail" onPress={handleChoosePhoto} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 250,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignSelf: 'center',
  },
});
export default ImagePicker;
