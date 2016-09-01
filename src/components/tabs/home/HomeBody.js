import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import HomeTabs from './HomeTabs';

const HomeBody = (props) => {
  return(
    <View style={styles.body}>
      <HomeTabs
        items={props.items}
      />
    </View>
  )
}

export default HomeBody;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'grey'
  }
})
