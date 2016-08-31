import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import debounce from 'lodash.debounce';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../../actions/itemActions';

import ExperienceHeaderBar from './ExperienceHeaderBar';
import ExperienceList from './ExperienceList';

export default class ExperienceContainer extends Component {
  constructor(props) {
    super(props);
    this.onDestinationChange = debounce(this.onDestinationChange, 600);
  }

  onDestinationChange = (searchText) => {
    this.props.actions.filterItems(searchText);
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
  items: React.PropTypes.array.isRequired,
  searchText: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

function mapStateToProps(state, ownProps) {
  let filteredItems = state.items.items.filter((item) => item.name.toLowerCase().indexOf(state.items.searchText) >= 0);
  return {
    searchText: state.items.searchText,
    items: filteredItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceContainer);
