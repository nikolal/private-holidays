import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const ContactInfo = (props) => {
  return(
    <View style={styles.container}>

      <View style={styles.nameValueContainer}>
        <Text style={styles.infoName}>
          Phone
        </Text>
        <Text style={styles.infoValue}>
          +91-8880924391
        </Text>
      </View>

      <View style={styles.nameValueContainer}>
        <Text style={styles.infoName}>
          Email
        </Text>
        <Text style={styles.infoValue}>
          sales@privateholidays.in
        </Text>
      </View>

    </View>
  )
}

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  nameValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    borderColor: 'silver'
  },
  infoName: {
    
  },
  infoValue: {

  }
})
