import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

const HomeInternationalList = (props) => {
  const createItem = (item) => (
    <Text
       key={item.id}
       style={styles.item}>
       {item.name}
    </Text>
  )

  return (
   <ScrollView contentContainerStyle={styles.container}>
      {props.items.map(createItem)}
   </ScrollView>
  )
}

export default HomeInternationalList;

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'silver',
      flexWrap: 'wrap',
      justifyContent: 'center'
   },
   item: {
      flex: 1,
      margin: 10,
      padding: 15,
      width: 160,
      height: 160,
      borderColor: 'blue',
      borderWidth: 1
   }
});
