import { View } from '@/components/Themed';
import React from 'react'
import Card from '@/components/Card';

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Card 
        title='Title'
        text='This is a card with a title and text'
        imageSource='../assets/images/photos/ocean.jpg'
      />
    </View>
  )
}

export default index