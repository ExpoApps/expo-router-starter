import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={styles.button}>
      <Text>Button</Text>
    </View>
  )
}

//creates a button stylesheet
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        alignSelf: 'flex-end', 
    }
});

export default Button