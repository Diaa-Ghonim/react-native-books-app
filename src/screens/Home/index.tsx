import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  // SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ErrorMessage} from '../../Components';
import {getBooks} from '../../redux/actions';
import {selectBooksState} from '../../redux/selectors';
import {Book} from '../../redux/types';
import {ListHeaderComponent, BookItem} from './Components';
import {ScreenProps} from './types';

const Home = ({route, navigation}: ScreenProps) => {
  const dispatch = useDispatch();
  const {books, loading, errMsg} = useSelector(selectBooksState);

  const renderBookItem = ({item}: {item: Book}) => <BookItem book={item} />;
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {errMsg.length > 0 && <ErrorMessage message={errMsg} />}
      <View>
        {books.length > 0 && (
          <FlatList
            refreshing
            ListHeaderComponent={
              <ListHeaderComponent navigation={navigation} route={route} />
            }
            decelerationRate={0.5}
            data={books}
            renderItem={renderBookItem}
            keyExtractor={(item, index) => item.id + '' + index}
          />
        )}
      </View>
    </View>

    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
