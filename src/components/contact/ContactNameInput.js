import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const ContactNameInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Name'
      onChangeText={props.onNameChange}
    />
  )
}

export default ContactNameInput;

ContactNameInput.propTypes = {
  onNameChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderColor: 'silver',
    borderWidth: 1
  }
});
