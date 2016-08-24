import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

const RegisterButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={props.register}>
        <Text>
          Register
        </Text>
    </TouchableHighlight>
  )
}

export default RegisterButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10
  }
})
