import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { View } from '@/components/Themed';
import Card from '@/components/Card';

export default function ModalScreen() {
  return (
    <View style={{flex: 1}}>
      <Card />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
