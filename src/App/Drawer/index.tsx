import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Home from '../screens/Home';
import AddBook from '../screens/AddBook';
import {StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(DrawerProps: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...DrawerProps}>
      <DrawerItemList {...DrawerProps} />
      <DrawerItem
        label="Close drawer"
        onPress={() => DrawerProps.navigation.closeDrawer()}
        labelStyle={styles.label}
        {...DrawerProps}
      />
    </DrawerContentScrollView>
  );
}

const DrawerContent = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#4169e1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerLabelStyle: styles.label,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="AddBook" component={AddBook} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {fontFamily: 'sans-serif-medium', fontWeight: 'bold'},
});
export default DrawerContent;
