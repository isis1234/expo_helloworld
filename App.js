import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
// import { DrawerNavigator} from 'react-native';
// import moment from 'moment'; // Version can be specified in package.json

// You can import from local files
import AssetExample from './components/AssetExample';
import LoginPage from './components/LoginPage';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
