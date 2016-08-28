import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

const HomeGuestsPicker = (props) => {
  return(
      <TextInput
        style={styles.input}
        keyboardType = 'numeric'
        placeholder='Number of guests'
        autoCapitalize='none'
        onChangeText={props.onGuestsNumberChange}
      />
  )
}

export default HomeGuestsPicker;

HomeGuestsPicker.propTypes = {
  guestsNumber: React.PropTypes.string.isRequired,
  onGuestsNumberChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    margin: 15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  }
})

// <Picker
//   style={styles.picker}
//   selectedValue={props.guestsNumber}
//   onValueChange={props.onGuestsNumberChange}>
//   <Picker.Item label="1" value={1} />
//   <Picker.Item label="2" value={2} />
//   <Picker.Item label="3" value={3} />
//   <Picker.Item label="4" value={4} />
//   <Picker.Item label="5" value={5} />
//   <Picker.Item label="6" value={6} />
//   <Picker.Item label="7" value={7} />
//   <Picker.Item label="8" value={8} />
//   <Picker.Item label="9" value={9} />
//   <Picker.Item label="10" value={10} />
// </Picker>
