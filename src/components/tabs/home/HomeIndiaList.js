import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

const HomeIndiaList = (props) => {
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

export default HomeIndiaList;

const styles = StyleSheet.create ({
   container: {
      // flex: 1,
      flexDirection: 'row',
      backgroundColor: 'silver',
      flexWrap: 'wrap',
      justifyContent: 'center'
   },
   item: {
      // flex: 1,
      margin: 15,
      padding: 15,
      width: 150,
      height: 150,
      borderColor: 'blue',
      borderWidth: 1
   }
});
