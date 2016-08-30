import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const ProfileUserNameInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Username'
      autoCapitalize='none'
      onChangeText={props.onUserNameChange}
    />
  )
}

export default ProfileUserNameInput;

ProfileUserNameInput.propTypes = {
  onUserNameChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
});
