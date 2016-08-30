import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../../actions/itemActions';

import ExperienceHeaderBar from './ExperienceHeaderBar';
import ExperienceList from './ExperienceList';

export default class ExperienceContainer extends Component {
  constructor(props) {
    super(props)
  }

  onDestinationChange = (text) => {
    alert(
      'Searching...  ' + text
    )
  }
  render(){
    return(
      <View style={styles.container}>
        <ExperienceHeaderBar
          onDestinationChange={this.onDestinationChange}
        />
        <ExperienceList
          items={this.props.items}
        />
      </View>
    )
  }
}

ExperienceContainer.propTypes = {
  items: React.PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceContainer);
