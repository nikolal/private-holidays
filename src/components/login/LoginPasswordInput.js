import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

const LoginPasswordInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Password'
      autoCapitalize='none'
      secureTextEntry={true}
      onChangeText={props.onChangePasswordText}
    />
  )
}

export default LoginPasswordInput;

LoginPasswordInput.propTypes = {
  onChangePasswordText: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
})
