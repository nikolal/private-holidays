import React, { Component } from 'react';
import {
  View,
  Stylesheet
} from 'react-native';

export default class OffersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        Offers
      </View>
    )
  }
}

const styles = Stylesheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
})
