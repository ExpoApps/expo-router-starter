import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Chip = ({ text, selected }: { text: string, selected?: boolean }) => {

  return (
    <View style={[styles.container, selected && styles.selected]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Chip

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    selected: {
      backgroundColor: 'lightgray'
    }
})