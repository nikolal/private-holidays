import React, { Component } from 'react'

import {
   View,
   Text,
   StyleSheet,
   ScrollView
} from 'react-native'

export default HomeList = (props) => {
  console.log(props)
   const createItem = (item) => (
      <Text
         key={item.id}
         style={styles.item}>
         {item.body}
      </Text>
   )

   return (
      <View style={styles.container}>
         <ScrollView>
            {props.items.map(createItem)}
         </ScrollView>
      </View>
   )
}

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
      borderColor: 'green',
      borderWidth: 1
   }
});
