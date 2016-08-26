import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import AboutInfo from './AboutInfo';

export default class AboutContainer extends Component {

   constructor() {
      super();
   }

   render() {
      return (
        <ScrollView>
      	  <AboutInfo/>
        </ScrollView>
      );
   }
}
