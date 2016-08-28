import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';

import ContactHeaderText from './ContactHeaderText';
import ContactInfo from './ContactInfo';
import ContactInfoInputs from './ContactInfoInputs';

export default class ContactContainer extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
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

  render(){
    return(
      <ScrollView style={styles.container}>
        <ContactHeaderText />
        <ContactInfo />
        <ContactInfoInputs
          onFirstNameChange={this.onFirstNameChange}
          onLastNameChange={this.onLastNameChange}
          onEmailChange={this.onEmailChange}
          onPhoneNumberChange={this.onPhoneNumberChange}
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
