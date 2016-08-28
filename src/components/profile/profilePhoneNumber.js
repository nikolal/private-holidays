import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const ProfilePhoneNumberInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='Username'
      autoCapitalize='none'
      keyboardType="numeric"
      onChangeText={props.onChangeUsername}
    />
  )
}

export default ProfilePhoneNumberInput;

ProfilePhoneNumberInput.propTypes = {
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
