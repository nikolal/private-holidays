import React, { component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

const GoToRegisterButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={props.goToRegister}>
        <Text>
          GO To Register
        </Text>
    </TouchableHighlight>
  )
}

export default GoToRegisterButton;

GoToRegisterButton.propTypes = {
  goToRegister: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10
  }
})
