import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const LoginEmailInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Email'
      autoCapitalize='none'
      onChangeText={props.onChangeEmailText}
    />
  )
}

export default LoginEmailInput;

LoginEmailInput.propTypes = {
  onChangeEmailText: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
})
