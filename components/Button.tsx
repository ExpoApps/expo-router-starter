import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '@/components/Themed';

const Button = ({ filled }: { filled?: boolean }) => {
  return (
    <View style={[styles.button, filled && styles.filled]}>
      <Text>Button</Text>
    </View>
  )
}

//creates a button stylesheet
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'red',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    filled: {
      backgroundColor: 'red'
    }
});

export default Button