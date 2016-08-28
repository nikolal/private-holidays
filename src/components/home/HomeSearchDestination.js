import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';

const HomeSearchDestination = (props) => {
  return(
    <TextInput
      style={styles.input}
      placeholder='Search Destination'
      autoCapitalize='none'
      onChangeText={props.onDestinationChange}
    />
  )
}

export default HomeSearchDestination;

HomeSearchDestination.propTypes = {
  onDestinationChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    marginTop: 80,
    margin: 15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  }
})
