import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet
} from 'react-native';

export default MenuList = (props) => {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={props.goToHome}>
          Home
        </Text>
        <Text
          style={styles.text}
          onPress={props.goToAbout}>
          About
        </Text>
        <Text
          style={styles.text}
          onPress={props.goToFaq}>
          FAQ
        </Text>
      </View>
   )
}

MenuList.propTypes = {
  goToHome: React.PropTypes.func.isRequired,
  goToAbout: React.PropTypes.func.isRequired,
  goToFaq: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create ({
   container: {
      paddingTop: 27
   },
   text: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
   }
})
