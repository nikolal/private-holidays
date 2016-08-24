import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Navigator,
  TextInput,
  StyleSheet,
} from 'react-native';


export default class RegisterContainer extends Component {
  constructor() {
    super()
    this.state = {
        email: '',
        password: ''
    }
  }

  register = () => {
    alert('Register')
  }
  goToHome = (property) => {
    this.props.navigator.push({
      name: 'Home',
      title: 'Home'
    });
  }
  goToLogin = (property) => {
    this.props.navigator.push({
      name: 'Login',
      title: 'Login'
    });
  }
  rightButtonPress = () => {
    alert("Right Button Pressed")
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.goToHome}>
            <Text>
              GO To Home
            </Text>
        </TouchableHighlight>

        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={(text) => this.setState({email: text})}
        />
        <Text>
          {this.state.email}
        </Text>
        <Text>
          {this.state.password}
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={ () => this.signup(this.state.email, this.state.password)}>
          <Text>
            Register
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={ () => this.goToLogin()}>
          <Text>
            Go to Login
          </Text>
        </TouchableHighlight>

      </View>
    )
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
    borderColor: 'blue',
    borderWidth: 1
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10
  }
});
