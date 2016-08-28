import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';

import HomeList from './HomeList';
import HomeSearchDestination from './HomeSearchDestination';
import HomeCheckInInput from './HomeCheckInInput';
import HomeCheckOutInput from './HomeCheckOutInput';

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      destinationName: '',
      checkInDate: '',
      checkOutDate: ''
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
  }
  onChangeCheckOutDate = (date) => {
    this.setState({
      checkOutDate: date
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <HomeSearchDestination
          onChangeDestinationText={this.onChangeDestinationText}
        />
        <HomeCheckInInput
          checkInDate={this.state.checkInDate}
          onChangeCheckInDate={this.onChangeCheckInDate}
        />
        <HomeCheckOutInput
          checkOutDate={this.state.checkOutDate}
          onChangeCheckOutDate={this.onChangeCheckOutDate}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

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
