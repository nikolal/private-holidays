import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';

import HomeList from './HomeList';
import HomeSearchDestination from './HomeSearchDestination';
import HomeCheckInInput from './HomeCheckInInput';

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      destinationName: '',
      checkInDate: ''
    }
  }

  onChangeDestinationText = (text) => {
    this.setState({
      destinationName: text
    })
  }
  onChangeCheckInDate = (date) => {
    this.setState({
      checkInDate: date
    })
    alert(this.state.checkInDate)
  }

  render(){
    return (
      <View>
        <HomeSearchDestination
          onChangeDestinationText={this.onChangeDestinationText}
        />
        <HomeCheckInInput
          checkInDate={this.state.checkInDate}
          onChangeCheckInDate={this.onChangeCheckInDate}
        />
        <HomeList
          items = {this.props.items}
        />
      </View>
    );
  }
}

HomeContainer.propTypes = {
  items: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
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
