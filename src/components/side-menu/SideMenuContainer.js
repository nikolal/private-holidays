import React, { Component } from 'react';

import {
   View,
   StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';

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
  logout = () => {
    console.log('logout')
    this.props.actions.logoutUser();
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <MenuList
          goToHome={this.goToHome}
          goToAbout={this.goToAbout}
          goToFaq={this.goToFaq}
          goToContact={this.goToContact}
          goToOffers={this.goToOffers}
          goToProfile={this.goToProfile}
          logout={this.logout}
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
});

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContainer);
