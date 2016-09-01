import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../../actions/itemActions';

import debounce from 'lodash.debounce';

import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.onInternationalChange = debounce(this.onInternationalChange, 600);
  }

  componentWillMount = () => {
    this.props.hideNavigationBar();
  }

  onInternationalChange = (searchText) => {
    this.props.actions.filterItems(searchText);
  }

  render(){
    return (
        <View>
          <HomeHeader
            onInternationalChange={this.onInternationalChange}
          />
          <HomeBody
            items={this.props.items}
          />
        </View>
    );
  }
}

HomeContainer.propTypes = {
  // items: React.PropTypes.array,
  // actions: React.PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
