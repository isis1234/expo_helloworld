import * as React from 'react';
import { StyleSheet } from 'react-native';
// import { DrawerNavigator} from 'react-native';

// You can import from local files
import LoginPage from './components/LoginPage';

export default class App extends React.Component {
  render() {
    return (
      <LoginPage />
    );
  }
}

const styles = StyleSheet.create({
});
