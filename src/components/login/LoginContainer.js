import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';

export default class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: 'a@aaa.com',
      password: 'aaa'
    }
  }

  login = () => {
    alert(this.state.email + ' ' + this.state.password);
  }

  goToHome = () => {
    this.props.navigator.push({
      name: 'Home',
      title: 'Home'
    });
  }

  goToRegister = () => {
    this.props.navigator.push({
      name: 'Register',
      title: 'Register'
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.goToHome}>
            <Text>
              Go To Home
            </Text>
        </TouchableHighlight>

        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize='none'
          defaultValue='a@aaa.com'
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize='none'
          defaultValue='aaa'
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.login}>
          <Text>
            Login
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.goToRegister}>
          <Text>
            Go to Register
          </Text>
        </TouchableHighlight>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 200,
    backgroundColor: 'silver',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'silver'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10
  }
});
