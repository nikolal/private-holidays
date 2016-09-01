import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import HomeSearchInput from './HomeSearchInput';

const HomeHeader = (props) => {
  return(
    <View style={styles.header}>
      <HomeSearchInput
        onInternationalChange={props.onInternationalChange}
      />
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    height: 250,
    backgroundColor: 'silver'
  }
})
