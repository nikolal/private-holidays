import React, { Component } from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native';

export default MenuList = (props) => {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={props.goToHome}>
          <Text style={styles.text}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.goToAbout}>
          <Text style={styles.text}>
            About
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.goToFaq}
        >
          <Text style={styles.text}>
            FAQ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.goToContact}
        >
          <Text style={styles.text}>
            Contact
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.goToOffers}
        >
          <Text style={styles.text}>
            Offers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.goToProfile}
        >
          <Text style={styles.text}>
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.logout}
        >
          <Text style={styles.text}>
            Logout
          </Text>
        </TouchableOpacity>

      </View>
   )
}

MenuList.propTypes = {
  goToHome: React.PropTypes.func.isRequired,
  goToAbout: React.PropTypes.func.isRequired,
  goToFaq: React.PropTypes.func.isRequired,
  goToContact: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create ({
   container: {
      paddingTop: 27
   },
   text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10
   }
})
