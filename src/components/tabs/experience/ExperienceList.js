import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

const ExperienceList = (props) => {
  const createItem = (item) => (
    <Text
       key={item.id}
       style={styles.item}>
       {item.name}
    </Text>
  )

  return (
   <ScrollView>
      {props.items.map(createItem)}
   </ScrollView>
  )
}

export default ExperienceList;

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      marginTop: 50,
      height: 500,
      backgroundColor: 'silver'
   },
   item: {
      margin: 15,
      padding: 15,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1
   }
});
