import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import ProfileUserNameInput from './ProfileUserNameInput';
import ProfileFirstNameInput from './ProfileFirstNameInput';
import ProfileLastNameInput from './ProfileLastNameInput';
import ProfilePhoneNumberInput from './ProfilePhoneNumberInput';


export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  }

  onUserNameChange = (text) => {
    this.setState = ({
      userName: text
    })
  }
  onFirstNameChange = (text) => {
    this.setState = ({
      firstName: text
    })
  }
  onLastNameChange = (text) => {
    this.setState = ({
      lastName: text
    })
  }
  onPhoneNumberChange = (text) => {
    this.setState = ({
      phoneNumber: text
    })
  }

  render(){
    return(
      <View
        tabLabel="Account"
        style={styles.container}
      >

        <ProfileUserNameInput
          onUserNameChange={this.onUserNameChange}
        />
        <ProfileFirstNameInput
          onFirstNameChange={this.onFirstNameChange}
        />
        <ProfileLastNameInput
          onLastNameChange={this.onLastNameChange}
        />
        <ProfilePhoneNumberInput
          onPhoneNumberChange={this.onPhoneNumberChange}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
})
