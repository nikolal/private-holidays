import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { loadItems } from '../../actions/itemActions';

import RegisterContainer from '../register/RegisterContainer';
import LoginContainer from '../login/LoginContainer';
import AboutContainer from '../about/AboutContainer';
import ContactContainer from '../contact/ContactContainer';
import FaqContainer from '../faq/FaqContainer';
import ProfileContainer from '../profile/ProfileContainer';

import SideMenuContainer from '../side-menu/SideMenuContainer';
import SideMenu from 'react-native-side-menu';

import Tabs from '../tabs/Tabs';

const store = configureStore();
store.dispatch(loadItems());

export default class Router extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideMenuOpened: false,
      navigationBar: true
    };
  }

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpened: true
    });
  }

  navigate = (route) => {
    this.refs.navigator.push(route);
    this.setState({
      sideMenuOpened: false
    });
  }

  hideNavigationBar = () => {
    this.setState({
      navigationBar: false
    });
  }
  showNavigationBar = () => {
    console.log('bbb')
    this.setState({
      navigationBar: true
    });
  }

  render() {
    const menu = <SideMenuContainer navigate={this.navigate}/>;
    return (
      <Provider store={store}>
        <SideMenu
          menu={menu}
          isOpen={this.state.sideMenuOpened}
          edgeHitWidth={0}
        >
          <Navigator
            ref="navigator"
            initialRoute={{ name: 'Login', title: 'Login' }}
            renderScene={ this.renderScene }
            navigationBar={
              this.state.navigationBar == true ? <Navigator.NavigationBar
                style={styles.navigationBar}
                routeMapper={this.NavigationBarRouteMapper(this.toggleSideMenu)}
              /> : null
            }
          />
        </SideMenu>
      </Provider>
    );
  }
  renderScene = (route, navigator) => {
    if(route.name == 'Tabs') {
      return (
        <Tabs
          hideNavigationBar={this.hideNavigationBar}
          showNavigationBar={this.showNavigationBar}
          {...route.passProps}
        />
      )
    }
    if(route.name == 'Register') {
      return (
        <RegisterContainer
          navigator={ navigator }
          {...route.passProps}
        />
      )
    }
    if(route.name == 'Login') {
      return (
        <LoginContainer
          navigator={ navigator }
          {...route.passProps}
        />
      )
    }
    if(route.name == 'Contact') {
      return (
          <ContactContainer/>
      )
    }
    if(route.name == 'About') {
      return (
          <AboutContainer/>
      )
    }
    if(route.name == 'FAQ') {
      return (
          <FaqContainer/>
      )
    }
    if(route.name == 'Profile') {
      return (
          <ProfileContainer/>
      )
    }
  }
  NavigationBarRouteMapper = (toggleSideMenu) => ({
    RightButton(route, navigator, index, navState) {
      if(index > 0 && (
        route.name == 'About' ||
        route.name == 'FAQ'
      )) {
        return (
          <TouchableOpacity
            onPress={() => { if (index > 0) { navigator.pop() } }}>
            <Text style={ styles.rightButton }>
              Back
            </Text>
          </TouchableOpacity>
        )
      }
      else { return null }
    },
    LeftButton(route, navigator, index, navState) {
      return (
        <TouchableOpacity
          onPress={toggleSideMenu}>
          <Text style={ styles.leftButton }>
            Menu
          </Text>
        </TouchableOpacity>
      )
    },
    Title(route, navigator, index, navState) {
      return(
        <Text style={ styles.title }>
          {route.title}
        </Text>
      )
    }
  });
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#246dd5',
  },
  navigationBarHidden: {
    backgroundColor: 'red'
  },
  leftButton: {
    color: '#ffffff',
    margin: 10,
    fontSize: 17,
  },
  title: {
    paddingVertical: 10,
    color: '#ffffff',
    justifyContent: 'center',
    fontSize: 18
  },
  rightButton: {
    color: 'white',
    margin: 10,
    fontSize: 16
  }
});
