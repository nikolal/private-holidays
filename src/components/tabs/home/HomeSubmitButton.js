import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const HomeSubmitButton = (props) => {
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={props.onSearchSubmit}
    >
      <Text style={styles.text}>
        Search
      </Text>
    </TouchableOpacity>
  )
}

export default HomeSubmitButton;

HomeSubmitButton.propTypes = {
  onSearchSubmit: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 20
  },
  text: {
    fontSize: 20,
    color: 'blue'
  }
})
