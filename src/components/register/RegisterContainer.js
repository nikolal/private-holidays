import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';

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
    this.props.actions.signup(this.state.email, this.state.password);
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

RegisterContainer.propTypes = {
  navigator: React.PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white'
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
