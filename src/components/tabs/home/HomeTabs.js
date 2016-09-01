import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomeInternationalList from './HomeInternationalList';
import HomeIndiaList from './HomeIndiaList';


const HomeTabs = (props) => {
  return(
    <ScrollableTabView
      style={styles.container}
    >
      <HomeInternationalList
        tabLabel="International"
        items={props.items}
      />
    <HomeIndiaList
        tabLabel="India"
        items={props.items}
      />
    </ScrollableTabView>
  )
}

export default HomeTabs;

HomeTabs.propTypes = {
  // hideNavigationBar: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
