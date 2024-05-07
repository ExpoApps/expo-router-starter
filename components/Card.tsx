import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Button from './Button'

const Card = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/photos/ocean.jpg')} style={styles.image} />
        <View style={styles.bottom}>
            <Text>Fish</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in pretium ante. Maecenas finibus, sem in convallis tincidunt, elit enim mollis massa. </Text>
            <Button />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        width: '100%',
    },
    bottom: {
        backgroundColor: 'gray',
        padding: 5,
    },
});

export default Card
