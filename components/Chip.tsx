import { StyleSheet } from 'react-native'
import { View, Text } from '@/components/Themed';
import React from 'react'
import { useColors } from '@/constants/Colors'

const Chip = ({ text, selected }: { text: string, selected?: boolean }) => {
  const colors = useColors();
  return (
    <View style={[styles.container, 
    selected && {backgroundColor: colors.selected} || {backgroundColor: colors.select},
    {borderColor: colors.shadow}
    ]}>
      <Text>{text}</Text>
    </View>
  )
}

export default Chip

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 5,
        borderBottomWidth: 1,
    },
})