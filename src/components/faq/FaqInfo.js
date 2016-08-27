import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'

export default SwitchExample = (props) => {
   return (
      <View style = {styles.container}>

            <Text style = {styles.headerText}>
              Curabitur at lacus ac velit?
            </Text>
            <Text style={styles.text}>
              Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum. In ac felis quis tortor malesuada pretium. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus aliquet elit ac nisl.
            </Text>

            <Text style = {styles.headerText}>
              Pellentesque libero tortor tincidunt et ?
            </Text>
            <Text style={styles.text}>
              Fusce neque. Aenean vulputate eleifend tellus. Sed a libero. In consectetuer turpis ut velit. Vivamus euismod mauris. Proin faucibus arcu quis ante. Phasellus accumsan cursus velit. Vivamus laoreet. Praesent ut ligula non mi varius sagittis. Morbi vestibulum volutpat enim.
            </Text>
            
     </View>
  )
}

const styles = StyleSheet.create ({
  container: {
     flex: 1,
     alignItems: 'center',
     marginTop: 65,
     backgroundColor: 'white'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    padding: 20,
  },
  capitalLetter: {
    color: 'red',
    fontWeight: 'bold'
  }
})
