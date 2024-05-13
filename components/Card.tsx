import { Image, StyleSheet, Dimensions } from 'react-native'
import { View, Text } from '@/components/Themed';
import React from 'react'
import { useColors } from '@/constants/Colors';

const screenHeight = Dimensions.get('window').height;

interface CardProps {
    children?: any;
    imageSource?: string;
    title?: string;
    text?: string;
}

const Card: React.FC<CardProps> = ({ children, imageSource, title, text }) => {
    const colors = useColors();
    return (
        <View style={[styles.container, {borderColor: colors.gray}]}>
            {imageSource && <Image source={{uri: imageSource}} style={styles.image} />}
            <View style={[{...styles.bottom, backgroundColor: colors.surface }]}>
                {title && <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>}
                {text && <Text>{text}</Text>}
                {children && children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        flexDirection: 'column',
        borderBottomWidth: 1,
    },
    image: {
        height: screenHeight * 0.3,
        width: '100%',
    },
    bottom: {
        padding: 15,
    },
});

export default Card
