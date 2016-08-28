import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import ContactHeaderText from './ContactHeaderText';
import ContactInfo from './ContactInfo';
import ContactUserInfoInputs from './ContactUserInfoInputs';
import ContactDestinationInfoInputs from './ContactDestinationInfoInputs';
import ContactSubmitButton from './ContactSubmitButton';
import ContactNameInput from './ContactNameInput';
import ContactEmailInput from './ContactEmailInput';
import ContactPhoneNumberInput from './ContactPhoneNumberInput';
import ContactDateOfTravelPicker from './ContactDateOfTravelPicker';
import ContactRequirementInput from './ContactRequirementInput';

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
      maximalPrice: '',
      name: '',
      dateOfTravel: '',
      requirement: ''
    }
  }

  onFirstNameChange = (text) => {
    this.setState({
      firstName: text
    });
  }
  onLastNameChange = (text) => {
    this.setState({
      lastName: text
    });
  }
  onEmailChange = (text) => {
    this.setState({
      email: text
    });
  }
  onPhoneNumberChange = (text) => {
    this.setState({
      phoneNumber: text
    });
  }
  onDestinationNameChange = (text) => {
    this.setState({
      destinationName: text
    });
  }
  onMonthChange = (text) => {
    this.setState({
      month: text
    });
  }
  onMinimalPriceChange = (text) => {
    this.setState({
      minimalPrice: text
    });
  }
  onMaximalPriceChange = (text) => {
    this.setState({
      maximalPrice: text
    });
  }
  onNameChange = (text) => {
    this.setState({
      name: text
    });
  }
  onDateOfTravelChange = (text) => {
    this.setState({
      dateOfTravel: text
    });
  }
  onRequirementChange = (text) => {
    this.setState({
      requirement: text
    });
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
      'maximalPrice: ' + this.state.maximalPrice + ' ' +
      'name: ' + this.state.name + ' ' +
      'dateOfTravel: ' + this.state.dateOfTravel + ' ' +
      'requirement: ' + this.state.requirement + ' '
    );
  }

  render(){
    return(
      <ScrollableTabView style={styles.container}>

        <ScrollView tabLabel="Guests & Travellers" >
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

        <ScrollView tabLabel="Marketing & Business Opportunities">
          <ContactHeaderText/>
          <ContactInfo />
          <ContactNameInput
            onNameChange={this.onNameChange}
          />
          <ContactEmailInput
            onEmailChange={this.onEmailChange}
          />
          <ContactPhoneNumberInput
            onPhoneNumberChange={this.onPhoneNumberChange}
          />
          <ContactRequirementInput
            onRequirementChange={this.onRequirementChange}
          />
          <ContactDateOfTravelPicker
            dateOfTravel={this.state.dateOfTravel}
            onDateOfTravelChange={this.onDateOfTravelChange}
          />
          <ContactSubmitButton
            onContactDataSubmit={this.onContactDataSubmit}
          />
        </ScrollView>

      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#ffffff'
  }
});
