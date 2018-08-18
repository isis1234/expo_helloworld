import * as React from 'react';
import {  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigator } from 'react-navigation';
// You can import from local files
import Login from './components/LoginPage';
import AssetExample from './components/AssetExample';
import Calculator from './components/Calculator';

// Drawer navigation bar
const RootDrawer = DrawerNavigator({
  calculator: {
    screen:  () => (<Calculator />),
    navigationOptions: {
      drawerLabel: 'Calculator',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon name="calculator" size={25} color={focused?"#4787ed":"#000000"} />
      ),
    },
  },
  assetExample: {
    screen:  () => (<AssetExample />),
    navigationOptions: {
      drawerLabel: 'AssetExample',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon name="rocket" size={25} color={focused?"#4787ed":"#000000"} />
      ),
    },
  },
  loginPage: {
    screen: () => (<Login />),
    navigationOptions: {
      drawerLabel: ({ tintColor, focused }) => (
        'Login'
      ),
      drawerIcon: ({ tintColor, focused }) => (
        <Icon name="sign-in" size={25} color={focused?"#4787ed":"#000000"} />
      ),
    },
  },
});

export default RootDrawer;