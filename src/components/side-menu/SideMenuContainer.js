import React, { Component } from 'react';

import {
   View,
   StyleSheet
} from 'react-native';

import MenuList from './MenuList';

export default class SideMenuContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  goToHome = () => {
    this.props.navigate({
      name: 'Home',
      title: 'Home'
    });
  }
  goToAbout = () => {
    this.props.navigate({
      name: 'About',
      title: 'About'
    });
  }
  goToFaq = () => {
    this.props.navigate({
      name: 'FAQ',
      title: 'FAQ'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuList
          goToHome={this.goToHome}
          goToAbout={this.goToAbout}
          goToFaq={this.goToFaq}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
