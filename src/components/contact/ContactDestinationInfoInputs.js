import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

const ContactDestinationInfoInputs = (props) => {
  return(
    <View style={styles.container}>

      <Text>
        Destination Info:
      </Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Destination name'
          onChangeText={props.onDestinationNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder='Month'
          onChangeText={props.onMonthChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Minimal price'
          keyboardType="numeric"
          autoCapitalize='none'
          onChangeText={props.onPriceRangeChange}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder='Maximal price'
          autoCapitalize='none'
          onChangeText={props.onPriceRangeChange}
        />
      </View>
    </View>
  )
}

export default ContactDestinationInfoInputs;

ContactDestinationInfoInputs.propTypes = {
  onDestinationNameChange: React.PropTypes.func.isRequired,
  onMonthChange: React.PropTypes.func.isRequired,
  onMinimalPriceChange: React.PropTypes.func.isRequired,
  onMaximalPriceChange: React.PropTypes.func.isRequired,

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
