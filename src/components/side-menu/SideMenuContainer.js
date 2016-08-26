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
   render() {
      return (
         <View style={styles.container}>
            <MenuList/>
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
