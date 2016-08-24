import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

const GoToHomeButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={props.goToHome}>
        <Text>
          Go To Home
        </Text>
    </TouchableHighlight>
  )
}

export default GoToHomeButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10
  }
})
