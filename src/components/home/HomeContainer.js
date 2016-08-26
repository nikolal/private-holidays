import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';

import HomeList from './HomeList';

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <HomeList
        items = {this.props.items}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
