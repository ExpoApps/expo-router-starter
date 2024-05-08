import { View } from '@/components/Themed';
import React from 'react'
import Chip from '@/components/Chip';
import Card from '@/components/Card';

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Chip text={'fizz'} selected />
        <Chip text={'buzz'} />
      </View>
      <Card />
      <Card />
    </View>
  )
}

export default index