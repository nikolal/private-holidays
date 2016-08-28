import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const ContactRequirementInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Requirement'
      onChangeText={props.onRequirementChange}
    />
  )
}

export default ContactRequirementInput;

ContactRequirementInput.propTypes = {
  onRequirementChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 15,
    marginRight: 15,
    height: 100,
    borderColor: 'silver',
    borderWidth: 1
  }
});
