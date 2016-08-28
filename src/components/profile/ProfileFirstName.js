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
      onChangeText={props.onChangeUsername}
    />
  )
}

export default ProfileFirstNameInput;

ProfileFirstNameInput.propTypes = {
  onChangeUserNameext: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
});
