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
              About Us
            </Text>
            <Text style={styles.text}>
               Every holiday is a journey within, to explore oneself. Since time immemorial, people have been searching for newer and better holiday experiences. And that is precisely what we do. We try and understand our guests’ aspirations towards a holiday and we work hard to exceed their expectations. Our highly personalized and luxurious villas across the globe shall speak for our seamless spirit in search of the best.
            </Text>

            <Text style = {styles.headerText}>
              Our Story
            </Text>
            <Text style={styles.text}>
               We began with a three-point motto. Credence, Customization and Creativity are those keys words based on which we started exploring new horizons in personalized holidaying. We have acquired a host of villas across the globe and turned them into idylls of luxury getaways. Yes, we artfully shape your dream vacation.
            </Text>

            <Text style = {styles.headerText}>
              What we believe
            </Text>
            <Text style={styles.text}>
               The very essence of ours is to deliver unmatched villa experiences across boundaries. Attempting to shape the future, we firmly believe in designing and delivering the best for our guests and turn the experience as one the most cherished in lives.
            </Text>

            <Text style = {styles.headerText}>
              Why people use our services?
            </Text>
            <Text style={styles.text}>
               Delivering on promises is the most crucial in any walk of life. We have acquired the trust of our guests by delivering more than what is actually promised most times. Our quality of service is unmatched and we leave absolutely nil scope for complaints. Above all, we value your vacation.
            </Text>

            <Text style = {styles.headerText}>
              Our Mission
            </Text>
            <Text style={styles.text}>
              We have multiple missions, is what we think. The core intention is to the raise our standards constantly and to keep challenging ourselves to achieve greater heights. As a team, we want to create the best for our guests.
            </Text>
            <Text style={styles.text}>
              With our feet set firmly on the principles of integrity and trust, we intend to grow globally to be the biggest and the best in terms of services delivered. The team is driven by results and the wide satisfied smile on the guests’ face is what we are working for.
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
