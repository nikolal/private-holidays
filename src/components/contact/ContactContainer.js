import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';

import ContactHeaderText from './ContactHeaderText';
import ContactInfo from './ContactInfo';
import ContactUserInfoInputs from './ContactUserInfoInputs';
import ContactDestinationInfoInputs from './ContactDestinationInfoInputs';
import ContactSubmitButton from './ContactSubmitButton';

export default class ContactContainer extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      destinationName: '',
      month: '',
      minimalPrice: '',
      maximalPrice: ''
    }
  }

  onFirstNameChange = (text) => {
    this.setState({
      firstName: text
    })
  }
  onLastNameChange = (text) => {
    this.setState({
      lastName: text
    })
  }
  onEmailChange = (text) => {
    this.setState({
      email: text
    })
  }
  onPhoneNumberChange = (text) => {
    this.setState({
      phoneNumber: text
    })
  }
  onDestinationNameChange = (text) => {
    this.setState({
      destinationName: text
    })
  }
  onMonthChange = (text) => {
    this.setState({
      month: text
    })
  }
  onMinimalPriceChange = (text) => {
    this.setState({
      minimalPrice: text
    })
  }
  onMaximalPriceChange = (text) => {
    this.setState({
      maximalPrice: text
    })
  }
  onContactDataSubmit = () => {
    alert(
      'firstName: ' + this.state.firstName + ' ' +
      'lastName: ' + this.state.lastName + ' ' +
      'email: ' + this.state.email + ' ' +
      'phoneNumber: ' + this.state.phoneNumber + ' ' +
      'destinationName: ' + this.state.destinationName + ' ' +
      'month: ' + this.state.month + ' ' +
      'minimalPrice: ' + this.state.minimalPrice + ' ' +
      'maximalPrice: ' + this.state.maximalPrice + ' '
    )
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <ContactHeaderText />
        <ContactInfo />
        <ContactUserInfoInputs
          onFirstNameChange={this.onFirstNameChange}
          onLastNameChange={this.onLastNameChange}
          onEmailChange={this.onEmailChange}
          onPhoneNumberChange={this.onPhoneNumberChange}
        />
        <ContactDestinationInfoInputs
          onDestinationNameChange={this.onDestinationNameChange}
          onMonthChange={this.onMonthChange}
          onMinimalPriceChange={this.onMinimalPriceChange}
          onMaximalPriceChange={this.onMaximalPriceChange}
        />
        <ContactSubmitButton
          onContactDataSubmit={this.onContactDataSubmit}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
