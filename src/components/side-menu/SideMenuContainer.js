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
  goToContact = () => {
    this.props.navigate({
      name: 'Contact',
      title: 'Contact'
    });
  }
  goToFaq = () => {
    this.props.navigate({
      name: 'FAQ',
      title: 'FAQ'
    });
  }
  goToOffers = () => {
    this.props.navigate({
      name: 'Offers',
      title: 'Offers'
    });
  }
  goToProfile = () => {
    this.props.navigate({
      name: 'Profile',
      title: 'Profile'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuList
          goToHome={this.goToHome}
          goToAbout={this.goToAbout}
          goToFaq={this.goToFaq}
          goToContact={this.goToContact}
          goToOffers={this.goToOffers}
          goToProfile={this.goToProfile}
        />
      </View>
    );
  }
}

SideMenuContainer.propTypes = {
  navigate: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
