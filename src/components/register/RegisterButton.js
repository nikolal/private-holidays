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

RegisterButton.propTypes = {
  register: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10
  }
})
