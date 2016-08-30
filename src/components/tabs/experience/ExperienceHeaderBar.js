import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import ExperienceSearchInput from './ExperienceSearchInput';

const ExperienceHeaderBar = (props) => {
  return(
    <View style={styles.headerBar}>
      <ExperienceSearchInput
        onDestinationChange={props.onDestinationChange}
      />
    </View>
  )
}

export default ExperienceHeaderBar;

ExperienceHeaderBar.propTypes = {
  onDestinationChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  headerBar: {
    height: 150,
    backgroundColor: 'red'
  }
});
