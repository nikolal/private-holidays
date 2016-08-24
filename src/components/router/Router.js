import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import HomeContainer from '../home/HomeContainer';
import RegisterContainer from '../register/RegisterContainer';
import LoginContainer from '../login/LoginContainer';


export default class Router extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Register', title: 'Register' }}
        renderScene={ this.renderScene }
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.navigationBar }
            routeMapper={ NavigationBarRouteMapper } />
        }
      />
    );
  }
  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return (
        <HomeContainer
          navigator={ navigator }
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
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableOpacity
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftButton }>
            Back
          </Text>
        </TouchableOpacity>
      )
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
        onPress={ () => route.onPress() }>
        <Text style={ styles.rightButton }>
          { route.rightText || 'Right Button' }
        </Text>
      </TouchableHighlight>
    )
  },
  Title(route, navigator, index, navState) {
    return(
      <Text style={ styles.title }>
        {route.title}
      </Text>
    )
  }
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#246dd5',
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
})
