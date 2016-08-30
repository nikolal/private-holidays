import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomeContainer from './home/HomeContainer';
import ProfileContainer from './profile/ProfileContainer';
import ExperienceContainer from './experience/ExperienceContainer';
import FavoritesContainer from './favorites/FavoritesContainer';

 const Tabs = (props) => {
  return(
    <ScrollableTabView
      style={styles.container}
      tabBarPosition="bottom"
    >
      <HomeContainer
        tabLabel="Home"
        hideNavigationBar={props.hideNavigationBar}
      />
      <ExperienceContainer
        tabLabel="Experience"
      />
      <FavoritesContainer
        tabLabel="Favorites"
      />
      <ProfileContainer
        tabLabel="Profile"
      />
    </ScrollableTabView>
  )
}

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
