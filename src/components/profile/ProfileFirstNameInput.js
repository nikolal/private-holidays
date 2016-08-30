import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const ProfileFirstNameInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Username'
      autoCapitalize='none'
      onChangeText={props.onFirstNameChange}
    />
  )
}

export default ProfileFirstNameInput;

ProfileFirstNameInput.propTypes = {
  onFirstNameChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
});
