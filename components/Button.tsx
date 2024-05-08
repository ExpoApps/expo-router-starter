import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '@/components/Themed';
import { useColors } from '@/constants/Colors';

const Button = ({ filled }: { filled?: boolean }) => {
  const color = useColors();


  return (
    <View style={[styles.button, {borderColor: color.selected}, filled && {backgroundColor: color.selected}]}>
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
});

export default Button