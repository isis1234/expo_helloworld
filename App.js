import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14

// You can import from local files
import LoginPage from './components/LoginPage';
import AssetExample from './components/AssetExample';

// Drawer navigation bar
const RootDrawer = DrawerNavigator({
  loginPage: {
    screen: () => (<LoginPage />),
    navigationOptions: {
      drawerLabel: ({ tintColor, focused }) => (
        'Login'
      ),
      drawerIcon: ({ tintColor, focused }) => (
        <Icon name="sign-in" size={30} color={focused?"#4787ed":"#000000"} />
      ),
    },
  },
  assetExample: {
    screen:  () => (<AssetExample />),
    navigationOptions: {
      drawerLabel: 'AssetExample',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon name="rocket" size={30} color={focused?"#4787ed":"#000000"} />
      ),
    },
  }
});

export default RootDrawer;