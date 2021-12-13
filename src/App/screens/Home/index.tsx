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
import {getBooks} from '../../../state/actions';
import {selectBooksState} from '../../../state/selectors';
import {Book} from '../../../state/types';
import {ListHeaderComponent, BookItem} from './Components';
// import {ScreenProps} from './types';

const Home = () => {
  const dispatch = useDispatch();
  const {books, loading, errMsg} = useSelector(selectBooksState);

  const renderBookItem = ({item}: {item: Book}) => <BookItem book={item} />;
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" testID="loader" />}
      {errMsg.length > 0 && <ErrorMessage message={errMsg} />}
      <View>
        {books.length > 0 && (
          <FlatList
            refreshing
            ListHeaderComponent={<ListHeaderComponent />}
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
