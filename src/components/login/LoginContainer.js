import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';

import LoginEmailInput from './LoginEmailInput';
import LoginPasswordInput from './LoginPasswordInput';
import LoginButton from './LoginButton';
import GoToHomeButton from './GoToHomeButton';
import GoToRegisterButton from './GoToRegisterButton';

export default class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: 'a@aaa.com',
      password: 'aaa'
    }
  }

  onChangeEmailtext = (text) => {
    this.setState({email: text});
  }
  onChangePasswordText = (text) => {
    this.setState({password: text})
  }
  login = () => {
    this.props.actions.login(this.state.email, this.state.password)
    alert(this.state.email + ' ' + this.state.password);
  }
  goToRegister = () => {
    this.props.navigator.push({
      name: 'Register',
      title: 'Register'
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

        <LoginEmailInput
          onChangeEmailText={this.onChangeEmailtext}
        />
        <LoginPasswordInput
          onChangePasswordText={this.onChangePasswordText}
        />
        <LoginButton
          login={this.login}
        />
        <GoToRegisterButton
          goToRegister={this.goToRegister}
        />
        <GoToHomeButton
          goToHome={this.goToHome}
        />

      </View>
    );
  }

}

LoginContainer.propTypes = {
  navigator: React.PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'silver'
  }
});

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
