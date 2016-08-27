import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import FaqInfo from './FaqInfo';

export default class FaqContainer extends Component {

   constructor() {
      super();
   }

   render() {
      return (
        <ScrollView>
      	  <FaqInfo/>
        </ScrollView>
      );
   }
}
