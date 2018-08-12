import * as React from 'react';
import {  Text, View, StyleSheet, Image, Button, TextInput, Alert, 
          KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
          Platform, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'; // 0.19.1
import moment from 'moment';
import { Constants } from 'expo';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default class LoginPage extends React.Component {
  //====FRONTEND====
  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid
        extraHeight={Platform.OS === "android" ? 10 : undefined}
        innerRef={ref => {this.scroll = ref}}
        scrollEnabled={true}
      >
        
        <Card title={moment().format('DD MMM, YYYY HH:mm')}>
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
              autoCorrect={false}
            />
            <TextInput 
              style={styles.textinput} 
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              autoCorrect={false}
            />
          </View>
          <View style={[styles.groupContainer, styles.inLine]}>
            <Button 
              style={styles.button}
              title="Sign Up" 
              onPress={this._btn_signup}
            />
            <Button 
              style={styles.button}
              title="Login" 
              onPress={this._btn_login}
            />
          </View>
        </Card>
      </KeyboardAwareScrollView>
    );
  }

  //====BACKEND====
  _btn_login(){
    Alert.alert('Login Success\n~');
  }
  _btn_signup(){
    Alert.alert('Sign Up Success~');
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
    textBreakStrategy: 'balanced',
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
