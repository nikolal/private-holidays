import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'

export default MenuList = (props) => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>
          Home
         </Text>
         <Text style={styles.text}>
          About
         </Text>
         <Text style={styles.text}>
          FAQ
         </Text>
      </View>
   )
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
