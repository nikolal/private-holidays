import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const HomeSearchInput = (props) => {
  return(
      <TextInput
        style={styles.input}
        placeholder='Where do you want to go?'
        autoCapitalize='none'
        onChangeText={props.onInternationalChange}
      />
  )
}

export default HomeSearchInput;

HomeSearchInput.propTypes = {
  onInternationalChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    marginTop: 80,
    margin: 15,
    height: 40,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1
  }
});
