import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const RegisterEmailInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Email'
      autoCapitalize='none'
      onChangeText={props.onChangeEmailText}
    />
  )
}

export default RegisterEmailInput;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1
  }
})
