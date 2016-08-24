import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

const LoginButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={props.login}>
        <Text>
          Login
        </Text>
    </TouchableHighlight>
  )
}

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10
  }
})
