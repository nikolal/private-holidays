import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

const ContactInfoInputs = (props) => {
  return(
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='First Name'
          onChangeText={props.onFirstNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          onChangeText={props.onLastNameChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={props.onEmailChange}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize='none'
          keyboardType="numeric"
          onChangeText={props.onPhoneNumberChange}
        />
      </View>
    </View>
  )
}

export default ContactInfoInputs;

ContactInfoInputs.propTypes = {
  onFirstNameChange: React.PropTypes.func.isRequired,
  onLastNameChange: React.PropTypes.func.isRequired,
  onEmailChange: React.PropTypes.func.isRequired,
  onPhoneNumberChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 2,
    padding: 5,
    borderColor: 'silver',
    borderWidth: 1
  }
});
