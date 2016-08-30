import React, { Component } from 'react';
import {
  Stylesheet
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

 const HomeTabs = (props) => {

  render(){
    return(
      <ScrollableTabView>
        <HomeContainer />
      </ScrollableTabView>
    )
  }
}

export default HomeTabs;
