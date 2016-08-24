import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class HomeContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Home page...
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})