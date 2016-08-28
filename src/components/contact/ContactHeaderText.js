import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const ContactHeaderText = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>
        GET IN TOUCH
      </Text>
      <Text style={styles.text}>
        How can we help? Give us a call for immediate assistance, or select an option below.
      </Text>
    </View>
  )
}

export default ContactHeaderText;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 12
  }
})
