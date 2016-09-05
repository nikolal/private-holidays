import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const ProfileLastNameInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Last Name'
      autoCapitalize='none'
      onChangeText={props.onLastNameChange}
    />
  )
}

export default ProfileLastNameInput;

ProfileLastNameInput.propTypes = {
  onLastNameChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
});
