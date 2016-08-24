import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

const RegisterPasswordInput = (props) => {
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

export default RegisterPasswordInput;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1
  }
})
