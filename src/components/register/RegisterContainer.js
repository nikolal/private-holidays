import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet,
} from 'react-native';

import RegisterEmailInput from './RegisterEmailInput';
import RegisterPasswordInput from './RegisterPasswordInput';
import RegisterButton from './RegisterButton';
import GoToHomeButton from './GoToHomeButton';
import GoToLoginButton from './GoToLoginButton';


export default class RegisterContainer extends Component {
  constructor() {
    super()
    this.state = {
        email: '',
        password: ''
    }
  }

  onChangeEmailtext = (text) => {
    this.setState({email: text});
  }
  onChangePasswordText = (text) => {
    this.setState({password: text})
  }
  register = () => {
    alert(this.state.email + ' ' + this.state.password);
  }
  goToLogin = () => {
    this.props.navigator.push({
      name: 'Login',
      title: 'Login'
    });
  }
  goToHome = () => {
    this.props.navigator.push({
      name: 'Home',
      title: 'Home'
    });
  }
  rightButtonPress = () => {
    alert("Right Button Pressed");
  }

  render(){
    return(
      <View style={styles.container}>

        <RegisterEmailInput
          onChangeEmailText={this.onChangeEmailtext}
        />
        <RegisterPasswordInput
          onChangePasswordText={this.onChangePasswordText}
        />
        <RegisterButton
          register={this.register}
        />
        <GoToLoginButton
          goToLogin={this.goToLogin}
        />
        <GoToHomeButton
          goToHome={this.goToHome}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  }
});
