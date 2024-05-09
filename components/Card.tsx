import { Image, StyleSheet } from 'react-native'
import { View, Text } from '@/components/Themed';
import React from 'react'
import Button from './Button'
import { useColors } from '@/constants/Colors';

const Card = () => {
    const colors = useColors();
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/photos/ocean.jpg')} style={styles.image} />
        <View style={[{...styles.bottom, backgroundColor: colors.surface }]}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fish</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in pretium ante. Maecenas finibus, sem in convallis tincidunt, elit enim mollis massa. </Text>
            <View style={{ ...styles.bottom, backgroundColor: colors.surface, flexDirection: 'row', justifyContent: 'flex-end' }}>
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
        padding: 5,
    },
});

export default Card
