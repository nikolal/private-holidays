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
import HomeGuestsPicker from './HomeGuestsPicker';
import HomeSubmitButton from './HomeSubmitButton';

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      destinationName: '',
      checkInDate: '',
      checkOutDate: '',
      guestsNumber: ''
    }
  }

  onDestinationChange = (text) => {
    this.setState({
      destinationName: text
    })
  }
  onCheckInDateChange = (date) => {
    this.setState({
      checkInDate: date
    })
  }
  onCheckOutDateChange = (date) => {
    this.setState({
      checkOutDate: date
    })
  }
  onGuestsNumberChange = (number) => {
    this.setState({
      guestsNumber: number
    })
  }
  onSearchSubmit = () => {
    alert(
      'destinationName: ' + this.state.destinationName + ' ' +
      'checkInDate: ' + this.state.checkInDate + ' ' +
      'checkOutDate: ' + this.state.checkOutDate + ' ' +
      'guestsNumber: ' + this.state.guestsNumber + ' '
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <HomeSearchDestination
          onDestinationChange={this.onDestinationChange}
        />
        <HomeCheckInInput
          checkInDate={this.state.checkInDate}
          onCheckInDateChange={this.onCheckInDateChange}
        />
        <HomeCheckOutInput
          checkOutDate={this.state.checkOutDate}
          onCheckOutDateChange={this.onCheckOutDateChange}
        />
        <HomeGuestsPicker
          guestsNumber={this.state.guestsNumber}
          onGuestsNumberChange={this.onGuestsNumberChange}
        />
        <HomeSubmitButton
          onSearchSubmit={this.onSearchSubmit}
        />
        <HomeList
          items={this.props.items}
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
    alignItems: 'center',
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
