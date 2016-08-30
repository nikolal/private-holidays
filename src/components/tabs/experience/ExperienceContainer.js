import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default class ExperienceContainer extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    console.log(this.props.showNavigationBar)
    return(
      <View style={styles.container}>

      </View>
    )
  }
}

ExperienceContainer.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
