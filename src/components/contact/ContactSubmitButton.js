import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const ContactSubmitButton = (props) => {
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={props.onContactDataSubmit}
    >
      <Text style={styles.text}>
        Get in touch
      </Text>
    </TouchableOpacity>
  )
}

export default ContactSubmitButton;

ContactSubmitButton.propTypes = {
  onContactDataSubmit: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'blue'
  }
})
