import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput, Alert } from 'react-native';
import moment from 'moment'; // 2.18.1

export default class LoginPage extends React.Component {
  _btn_login(){
    Alert.alert('Login Success~');
  }
  _btn_signup(){
    Alert.alert('Sign Up Success~');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <TextInput style={styles.username_input} placeholder="Username"/>
          <TextInput style={styles.password_input} placeholder="Password"/>
        </View>
        
        <View style={styles.inLine}>
          <Button 
            style={styles.button}
            title="Login" 
            color="#841584" 
            onPress={this._btn_login}
          />
          <Button 
            style={styles.button}
            title="Sign Up" 
            color="#841584" 
            onPress={this._btn_signup}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    margin: 24,
  },
  formContainer:{
    marginBottom: 24,
  },
  inLine:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  username_input:{
    width:200,
    fontSize: 24,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#abcdef',
  },
  password_input:{
    width:200,
    fontSize: 24,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#abcdef',
  },
  button:{
    width: 260,
    marginBottom: 30,
  }
});
