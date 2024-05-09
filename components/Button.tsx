import { StyleSheet } from 'react-native'
import React from 'react'
import { View, Text } from '@/components/Themed';
import { useColors } from '@/constants/Colors';

const Button = ({ filled }: { filled?: boolean }) => {
  const colors = useColors();


  return (
    <View style={[styles.button, {borderColor: colors.selected}, filled && {backgroundColor: colors.selected}]}>
      <Text>Button</Text>
    </View>
  )
}

//creates a button stylesheet
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: 'transparent',
    },
});

export default Button