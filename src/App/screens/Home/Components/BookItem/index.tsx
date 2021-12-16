import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Book} from '../../../../../state/types';
import {TouchableButton} from '../../../../Components';

const BookItem = ({book}: {book: Book}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  let {title, description, publishedDate, thumbnail} = book;
  const slicedDesc = description?.substring(0, 100);

  return (
    <View style={style.container} testID="bookItem">
      <Text style={style.title}>{title}</Text>
      <Text style={style.description}>
        {description && description.length < 100 && <Text>{description}</Text>}
        {isShowMore && <Text>{description}</Text>}
        {!isShowMore && description && description?.length > 100 && (
          <Text>{slicedDesc}...</Text>
        )}
        {!description && (
          <Text style={style.noDescription}>No Description</Text>
        )}
      </Text>

      {description && description.length > 100 && (
        <TouchableButton
          touchableOpacityProps={{onPress: () => setIsShowMore(!isShowMore)}}
          label={isShowMore ? 'less more' : 'show more'}
          textProps={{style: style.showMoreButton}}
        />
      )}
      <View style={style.bookImageContainer}>
        <Text style={style.publishedDate}>Published on: {publishedDate}</Text>

        <Image
          testID="bookThumbnail"
          source={{uri: thumbnail}}
          style={style.thumbnail}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#5e6a76',
    fontFamily: 'sans-serif-medium',
  },
  description: {
    color: '#5e6a76',
    padding: 10,
    paddingBottom: 0,
    fontFamily: 'sans-serif-medium',
    fontSize: 17,
  },
  noDescription: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    padding: 5,
    borderWidth: 1,
    borderColor: '#f5c6cb',
    fontFamily: 'sans-serif-medium',
    fontSize: 17,
  },
  showMoreButton: {
    color: '#1a73e8',
    fontFamily: 'sans-serif-medium',
    fontSize: 17,
    paddingLeft: 10,
  },
  bookImageContainer: {
    paddingLeft: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  publishedDate: {
    paddingBottom: 5,
    fontSize: 17,
    fontFamily: 'sans-serif-medium',
    color: '#5e6a76',
  },
  thumbnail: {width: 150, height: 250, borderWidth: 1, borderColor: '#ddd'},
});

export default BookItem;
