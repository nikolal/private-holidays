import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Router from './src/components/router/Router';

class privateHolidays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('privateHolidays', () => privateHolidays);
