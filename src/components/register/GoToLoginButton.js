import React, { component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

const GoToLoginButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={props.goToLogin}>
        <Text>
          GO To Login
        </Text>
    </TouchableHighlight>
  )
}

export default GoToLoginButton;

GoToLoginButton.propTypes = {
  goToLogin: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10
  }
})
