import { Image, StyleSheet } from 'react-native'
import { View, Text } from '@/components/Themed';
import React from 'react'
import Button from './Button'

const palette = {
    primary95: 'rgb(246, 237, 255)',
    primary90: 'rgb(234, 221, 255)',
    primary80: 'rgb(208, 188, 255)',
    primary70: 'rgb(182, 157, 248)',
    primary60: 'rgb(154, 130, 219)',
    primary50: 'rgb(127, 103, 190)',
    primary40: 'rgb(103, 80, 164)',
    primary30: 'rgb(79, 55, 139)',
    primary20: 'rgb(56, 30, 114)',
    primary10: 'rgb(33, 0, 93)',
}

const Card = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/photos/ocean.jpg')} style={styles.image} />
        <View style={styles.bottom}>
            <Text>Fish</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in pretium ante. Maecenas finibus, sem in convallis tincidunt, elit enim mollis massa. </Text>
            <View style={{ ...styles.bottom, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button />
                <Button filled />
            </View>
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
        backgroundColor: palette.primary10,
        padding: 5,
    },
});

export default Card
