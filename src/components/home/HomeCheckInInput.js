import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import DatePicker from 'react-native-datepicker';

const HomeCheckInInput = (props) => {
  return(
    <DatePicker
      style={styles.datePicker}
      date={props.checkInDate}
      mode="date"
      placeholder="Check In date"
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
      onDateChange={props.onChangeCheckInDate}
    />
  )
}

export default HomeCheckInInput;

const styles = StyleSheet.create({
  datePicker: {
    width: 200,
    margin: 20
  }
})
