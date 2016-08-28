import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import DatePicker from 'react-native-datepicker';

const ContactDateOfTravelPicker = (props) => {
  return(
    <DatePicker
      style={styles.datePicker}
      date={props.dateOfTravel}
      mode="date"
      placeholder="Date Of Travel"
      format="YYYY-MM-DD"
      minDate="2016-01-01"
      maxDate="2020-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
      }}
      onDateChange={props.onDateOfTravelChange}
    />
  )
}

export default ContactDateOfTravelPicker;

ContactDateOfTravelPicker.propTypes = {
  dateOfTravel: React.PropTypes.string.isRequired,
  onDateOfTravelChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  datePicker: {
    width: 200,
    margin: 20
  }
})
