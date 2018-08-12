import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput, Alert } from 'react-native';
import { Card, Input } from 'react-native-elements'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginPage extends React.Component {
  //====FRONTEND====
  render() {
    return (
      <View>
        <Card title='Login'>
          <View style={styles.groupContainer}>
            <Image
              style={styles.logo} 
              source={require("../assets/icons/default.png")}
            />
          </View>
          <View style={styles.groupContainer}>
            <TextInput 
              style={styles.textinput} 
              placeholder="Username" 
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect="false"
            />
            <TextInput 
              style={styles.textinput} 
              placeholder="Password"
              keyboardType="email-address"
              secureTextEntry="true"
              autoCapitalize="none"
              autoCorrect="false"
            />
          </View>
          
          <View style={styles.inLine}>
            <Button 
              style={styles.button}
              title="Login" 
              onPress={this._btn_login}
            />
            {
              // <Icon
              //   name='user'
              //   size={24}
              //   color='black'
              // />
            }
            <Button 
              style={styles.button}
              title="Sign Up" 
              onPress={this._btn_signup}
            />
          </View>
        </Card>
      </View>
    );
  }

  //====BACKEND====
  _btn_login(){
    Alert.alert('Login Success~');
  }
  _btn_signup(){
    Alert.alert('Sign Up Success~');
  }





}

const styles = StyleSheet.create({
  groupContainer:{
    alignItems: 'center',
    marginBottom: 24,
  },
  inLine:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textinput:{
    width:200,
    fontSize: 24,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ecf0f1',
    textBreakStrategy: 'balanced'
  },
  button:{
    width: 260,
    marginBottom: 30,
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
