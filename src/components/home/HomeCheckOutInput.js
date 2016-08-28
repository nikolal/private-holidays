import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import DatePicker from 'react-native-datepicker';

const HomeCheckOutInput = (props) => {
  return(
    <DatePicker
      style={styles.datePicker}
      date={props.checkOutDate}
      mode="date"
      placeholder="Check Out date"
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
      onDateChange={props.onCheckOutDateChange}
    />
  )
}

export default HomeCheckOutInput;

HomeCheckOutInput.propTypes = {
  checkOutDate: React.PropTypes.string.isRequired,
  onCheckOutDateChange: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  datePicker: {
    width: 200,
    margin: 20
  }
})
